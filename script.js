// DOM Basics & Visual Manipulation Demo

document.addEventListener('DOMContentLoaded', () => {
    // ======= DOM Structure & Selectors Demo =======
    
    // Getting elements with different selectors
    const mainHeading = document.querySelector('h1');
    const paragraph = document.getElementById('demo-paragraph');
    const specialSpan = document.querySelector('span');
    const allParagraphs = document.querySelectorAll('p');
    
    // Changing content
    mainHeading.textContent = 'DOM Manipulation Demo';
    
    // Create a paragraph to demonstrate text manipulation
    const demoPara = document.createElement('p');
    demoPara.id = 'demo-paragraph';
    demoPara.innerHTML = 'This text can be <strong>modified</strong> using JavaScript!';
    document.querySelector('main').appendChild(demoPara);
    


    
    // ======= Creating UI Elements for our demos =======
    
    const demoContainer = document.createElement('div');
    demoContainer.className = 'demo-container';
    document.querySelector('main').appendChild(demoContainer);
    
    // Create the color changer section
    const colorSection = document.createElement('section');
    colorSection.innerHTML = `
        <h2>Color Changing Demo</h2>
        <div class="color-buttons">
            <button class="color-btn" data-color="red">Red</button>
            <button class="color-btn" data-color="green">Green</button>
            <button class="color-btn" data-color="blue">Blue</button>
            <button class="color-btn" data-color="purple">Purple</button>
        </div>
        <div class="color-box">Click a button to change my color!</div>
    `;
    demoContainer.appendChild(colorSection);
    
    // Create the drawing board section
    const drawingSection = document.createElement('section');
    drawingSection.innerHTML = `
        <h2>Simple Drawing Board</h2>
        <div class="controls">
            <button id="clear-btn">Clear Canvas</button>
            <input type="color" id="color-picker" value="#000000">
            <input type="range" id="size-slider" min="1" max="20" value="5">
            <span id="size-value">5px</span>
        </div>
        <div class="canvas-container">
            <div id="drawing-canvas"></div>
        </div>
    `;
    demoContainer.appendChild(drawingSection);
    
    // Add styling for our demo elements
    const style = document.createElement('style');
    style.textContent = `
        .demo-container {
            margin: 20px 0;
            font-family: Arial, sans-serif;
        }
        
        section {
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        
        /* Color Changing Demo Styles */
        .color-buttons {
            margin-bottom: 10px;
        }
        
        .color-btn {
            padding: 8px 16px;
            margin-right: 5px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: transform 0.2s;
        }
        
        .color-btn:hover {
            transform: scale(1.1);
        }
        
        .color-box {
            width: 100%;
            height: 100px;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            transition: background-color 0.5s;
        }
        
        /* Drawing Board Styles */
        .controls {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        #drawing-canvas {
            width: 100%;
            height: 300px;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: crosshair;
            position: relative;
        }
        
        .pixel {
            position: absolute;
            border-radius: 50%;
        }
    `;
    document.head.appendChild(style);
    
    // ======= Color Changing Background Demo =======
    
    // Select elements
    const colorButtons = document.querySelectorAll('.color-btn');
    const colorBox = document.querySelector('.color-box');
    
    // Add event listeners to buttons
    colorButtons.forEach(button => {
        // Set button background color to match its data-color
        button.style.backgroundColor = button.dataset.color;
        button.style.color = 'white';
        
        // Add click event
        button.addEventListener('click', () => {
            // Changing the background with animation
            colorBox.style.backgroundColor = button.dataset.color;
            
            // Adding a visual feedback animation
            button.style.transform = 'scale(1.2)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
            
            // Change text content based on color
            colorBox.textContent = `The color is now ${button.dataset.color}!`;
        });
    });
    
    // ======= Simple Drawing Board Demo =======
    
    const canvas = document.getElementById('drawing-canvas');
    const clearBtn = document.getElementById('clear-btn');
    const colorPicker = document.getElementById('color-picker');
    const sizeSlider = document.getElementById('size-slider');
    const sizeValue = document.getElementById('size-value');
    
    let isDrawing = false;
    
    // Update size value display
    sizeSlider.addEventListener('input', () => {
        sizeValue.textContent = `${sizeSlider.value}px`;
    });
    
    // Drawing functionality
    function startDrawing() {
        isDrawing = true;
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        // Get mouse position relative to canvas
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create pixel
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.width = `${sizeSlider.value}px`;
        pixel.style.height = `${sizeSlider.value}px`;
        pixel.style.backgroundColor = colorPicker.value;
        pixel.style.left = `${x - sizeSlider.value / 2}px`;
        pixel.style.top = `${y - sizeSlider.value / 2}px`;
        
        canvas.appendChild(pixel);
    }
    
    // Clear canvas
    clearBtn.addEventListener('click', () => {
        while (canvas.firstChild) {
            canvas.removeChild(canvas.firstChild);
        }
    });
    
    // Event listeners for drawing
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);
    canvas.addEventListener('mousemove', draw);
    
    // Prevent default dragging behavior
    canvas.addEventListener('dragstart', (e) => e.preventDefault());
});
