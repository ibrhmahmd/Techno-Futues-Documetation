document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const cssInput = document.getElementById('css-input');
    const targetContainer = document.getElementById('target-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const checkSolutionBtn = document.getElementById('check-solution');
    const showHintBtn = document.getElementById('show-hint');
    const nextChallengeBtn = document.getElementById('next-challenge');
    const hintModal = document.getElementById('hint-modal');
    const closeHintBtn = document.querySelector('.close-hint');
    const hintText = document.getElementById('hint-text');
    const currentLevelDisplay = document.getElementById('current-level');
    const currentChallengeDisplay = document.getElementById('current-challenge');
    const challengeInstructions = document.getElementById('challenge-instructions');
    const targetDisplay = document.querySelector('.target-container');

    // Game State
    let currentLevel = 0;
    let currentChallenge = 0;
    let currentLevelData = gameLevels[currentLevel];
    let currentChallengeData = currentLevelData.challenges[currentChallenge];

    // Initialize the game
    function initGame() {
        loadChallenge(currentLevel, currentChallenge);
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Apply CSS on input change
        cssInput.addEventListener('input', function() {
            applyUserCSS();
        });

        // Check solution button
        checkSolutionBtn.addEventListener('click', function() {
            checkSolution();
        });

        // Show hint button
        showHintBtn.addEventListener('click', function() {
            showHint();
        });

        // Close hint modal
        closeHintBtn.addEventListener('click', function() {
            hintModal.style.display = 'none';
        });

        // Next challenge button
        nextChallengeBtn.addEventListener('click', function() {
            nextChallenge();
        });

        // Close hint modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === hintModal) {
                hintModal.style.display = 'none';
            }
        });
    }

    // Load a specific challenge
    function loadChallenge(levelIndex, challengeIndex) {
        currentLevel = levelIndex;
        currentChallenge = challengeIndex;
        currentLevelData = gameLevels[currentLevel];
        currentChallengeData = currentLevelData.challenges[currentChallenge];

        // Update UI
        currentLevelDisplay.textContent = `Level ${currentLevelData.level}`;
        currentChallengeDisplay.textContent = `Challenge ${currentChallengeData.id}`;
        challengeInstructions.innerHTML = `<h2>Challenge: ${currentChallengeData.title}</h2><p>${currentChallengeData.instructions}</p>`;
        hintText.innerHTML = currentChallengeData.hint;

        // Reset the CSS input
        cssInput.value = 'display: flex;';

        // Apply the default CSS
        applyUserCSS();

        // Apply target preview styles
        applyTargetPreview();

        // Reset feedback and buttons
        feedbackMessage.innerHTML = '';
        feedbackMessage.className = 'feedback';
        nextChallengeBtn.disabled = true;
    }

    // Apply the user's CSS to the container
    function applyUserCSS() {
        try {
            // Get the user's CSS input
            const userCSS = cssInput.value;

            // Parse the CSS properties
            const cssProperties = parseCSS(userCSS);

            // Apply the CSS to the container
            for (const property in cssProperties) {
                targetContainer.style[property] = cssProperties[property];
            }

            // Ensure display: flex is always applied
            if (!targetContainer.style.display || targetContainer.style.display !== 'flex') {
                targetContainer.style.display = 'flex';
            }

            // Clear any previous error messages
            feedbackMessage.innerHTML = '';
            feedbackMessage.className = 'feedback';
        } catch (error) {
            // Display error message
            feedbackMessage.innerHTML = `<span class="error-message">CSS Error: ${error.message}</span>`;
            feedbackMessage.className = 'feedback error';
        }
    }

    // Apply the target preview styles
    function applyTargetPreview() {
        const previewStyles = currentChallengeData.targetPreview;
        for (const property in previewStyles) {
            targetDisplay.style[property] = previewStyles[property];
        }
    }

    // Parse CSS string into an object
    function parseCSS(cssString) {
        const properties = {};
        const lines = cssString.split(';');

        for (let line of lines) {
            line = line.trim();
            if (!line) continue;

            const [property, value] = line.split(':').map(part => part.trim());
            if (!property || !value) {
                throw new Error(`Invalid CSS syntax: ${line}`);
            }

            // Convert kebab-case to camelCase for JavaScript
            const camelProperty = property.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
            properties[camelProperty] = value;
        }

        return properties;
    }

    // Check if the user's solution matches the target
    function checkSolution() {
        try {
            // Get the user's CSS
            const userCSS = cssInput.value;
            const userProperties = parseCSS(userCSS);

            // Check if all required properties are present
            const requiredProperties = currentChallengeData.requiredProperties;
            const missingProperties = [];

            for (const property of requiredProperties) {
                const camelProperty = property.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
                if (!userProperties[camelProperty]) {
                    missingProperties.push(property);
                }
            }

            if (missingProperties.length > 0) {
                feedbackMessage.innerHTML = `<span class="error-message">Missing required properties: ${missingProperties.join(', ')}</span>`;
                feedbackMessage.className = 'feedback error';
                return;
            }

            // Check if the values match the target
            const targetStyles = currentChallengeData.targetStyles;
            const incorrectProperties = [];

            for (const property in targetStyles) {
                const kebabProperty = property.replace(/([A-Z])/g, '-$1').toLowerCase();
                const camelProperty = kebabProperty.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
                
                // Skip display property check as we always enforce it
                if (property === 'display') continue;
                
                if (!userProperties[camelProperty] || 
                    userProperties[camelProperty] !== targetStyles[property]) {
                    incorrectProperties.push(kebabProperty);
                }
            }

            if (incorrectProperties.length > 0) {
                feedbackMessage.innerHTML = `<span class="error-message">Incorrect values for: ${incorrectProperties.join(', ')}</span>`;
                feedbackMessage.className = 'feedback error';
                return;
            }

            // Solution is correct
            feedbackMessage.innerHTML = `<span class="success-message">Great job! You've completed this challenge!</span>`;
            feedbackMessage.className = 'feedback success';
            nextChallengeBtn.disabled = false;

            // Add a celebration effect
            celebrateSuccess();
        } catch (error) {
            feedbackMessage.innerHTML = `<span class="error-message">Error checking solution: ${error.message}</span>`;
            feedbackMessage.className = 'feedback error';
        }
    }

    // Show hint modal
    function showHint() {
        hintModal.style.display = 'block';
    }

    // Move to the next challenge
    function nextChallenge() {
        // Check if there are more challenges in the current level
        if (currentChallenge < currentLevelData.challenges.length - 1) {
            // Move to the next challenge in the current level
            loadChallenge(currentLevel, currentChallenge + 1);
        } else if (currentLevel < gameLevels.length - 1) {
            // Move to the first challenge of the next level
            loadChallenge(currentLevel + 1, 0);
        } else {
            // Game completed
            showGameCompleted();
        }
    }

    // Show game completed message
    function showGameCompleted() {
        // Clear the game area
        challengeInstructions.innerHTML = `<h2>Congratulations!</h2><p>You've completed all the challenges!</p>`;
        targetContainer.innerHTML = '';
        cssInput.value = '';
        cssInput.disabled = true;
        checkSolutionBtn.disabled = true;
        showHintBtn.disabled = true;
        nextChallengeBtn.disabled = true;

        // Add a celebration message
        feedbackMessage.innerHTML = `<span class="success-message">You've mastered Flexbox! 🎉</span>`;
        feedbackMessage.className = 'feedback success';

        // Add a special celebration effect
        const container = document.querySelector('.flex-playground');
        container.innerHTML = `
            <h3>You're a Flexbox Master!</h3>
            <div class="celebration-container">
                <div class="cat-celebration">😺</div>
                <div class="cat-celebration">😸</div>
                <div class="cat-celebration">😹</div>
            </div>
        `;

        const celebrationContainer = document.querySelector('.celebration-container');
        celebrationContainer.style.display = 'flex';
        celebrationContainer.style.flexDirection = 'row';
        celebrationContainer.style.justifyContent = 'center';
        celebrationContainer.style.alignItems = 'center';
        celebrationContainer.style.height = '200px';

        const cats = document.querySelectorAll('.cat-celebration');
        cats.forEach(cat => {
            cat.style.width = '80px';
            cat.style.height = '80px';
            cat.style.backgroundColor = '#ffcc99';
            cat.style.borderRadius = '50%';
            cat.style.display = 'flex';
            cat.style.justifyContent = 'center';
            cat.style.alignItems = 'center';
            cat.style.fontSize = '40px';
            cat.style.margin = '10px';
            cat.style.animation = 'bounce 1s infinite alternate';
        });

        // Add a bounce animation
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes bounce {
                from { transform: translateY(0); }
                to { transform: translateY(-20px); }
            }
            .cat-celebration:nth-child(1) { animation-delay: 0s; }
            .cat-celebration:nth-child(2) { animation-delay: 0.2s; }
            .cat-celebration:nth-child(3) { animation-delay: 0.4s; }
        `;
        document.head.appendChild(style);
    }

    // Add a celebration effect when a challenge is completed
    function celebrateSuccess() {
        const cats = document.querySelectorAll('.cat-item');
        cats.forEach(cat => {
            cat.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                cat.style.animation = '';
            }, 500);
        });

        // Add a pulse animation
        if (!document.querySelector('#pulse-animation')) {
            const style = document.createElement('style');
            style.id = 'pulse-animation';
            style.innerHTML = `
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Initialize the game
    initGame();
});


let i = 50

while (i>0){
    console.log(i)
    i=i-5
}


for(let i=0 ; i<10 ; i++){
    
    console.log(i)

}




let elemments = document.querySelectorAll('#app')

elemments.forEach((element)=>{
    element.style.color= 'red'
})  





