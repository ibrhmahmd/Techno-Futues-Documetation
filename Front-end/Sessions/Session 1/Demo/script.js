// DOM manipulation to create grid layout
document.addEventListener('DOMContentLoaded', function() {
    // Create container
    const container = document.createElement('div');

    container.classList.add('container', 'mt-4');
    



    // Create title
    const title = document.createElement('h1');
    title.classList.add('text-center', 'mb-4');
    title.textContent = 'Grid Layout Demo (DOM Created)';
    container.appendChild(title);
    




    // Create row
    const row = document.createElement('div');
    row.classList.add('row');
    




    // Card data
    const cardData = [
        {
            title: 'Card 1',
            content: 'This is the first card created with DOM manipulation.',
            buttonText: 'Learn More',
            buttonClass: 'btn-primary',
            iconClass: 'bi-airplane'
        },
        {
            title: 'Card 2',
            content: 'Second card built using createElement and classList.',
            buttonText: 'View Details',
            buttonClass: 'btn-success',
            iconClass: 'bi-balloon-fill'
        },
        {
            title: 'Card 3',
            content: 'Third card demonstrating dynamic content creation.',
            buttonText: 'Explore',
            buttonClass: 'btn-warning',
            iconClass: 'bi-balloon'
        },
        {
            title: 'Card 4',
            content: 'Fourth card showing JavaScript DOM manipulation.',
            buttonText: 'Get Started',
            buttonClass: 'btn-danger',
            iconClass: 'bi-apple'
        },
        {
            title: 'Card 5',
            content: 'Fifth card showing JavaScript DOM manipulation.',
            buttonText: 'Get Started',
            buttonClass: 'btn-danger',
            iconClass:''
        },
        {
            title: 'Card 6',
            content: 'Sixth card showing JavaScript DOM manipulation.',
            buttonText: 'Get Started',
            buttonClass: 'btn-danger',
            iconClass:''
        },
        {
            title: 'Card 7',
            content: 'Seventh card showing JavaScript DOM manipulation.',
            buttonText: 'Get Started',
            buttonClass: 'btn-danger',
            iconClass:''

        },
        {
            title: 'Card 8',
            content: 'Eighth card showing JavaScript DOM manipulation.',
            buttonText: 'Get Started',
            buttonClass: 'btn-danger',
            iconClass:''

        },
        {
            title: 'Card 9',
            content: 'Ninth card showing JavaScript DOM manipulation.',
            buttonText: 'Get Started',
            buttonClass: 'btn-danger',
            iconClass:''

        },
        {
            title: 'Card 10',
            content: 'Tenth card showing JavaScript DOM manipulation.',
            buttonText: 'Get Started',
            buttonClass: 'btn-danger',
            iconClass:''

        },
    ];



    
    // Create cards
    cardData.forEach(cardInfo => {

        // Create column
        const col = document.createElement('div');
        col.classList.add('col-3');

        // col.classList.add('col-'+ (12/cardData.length));
        

        // Create grid card
        const gridCard = document.createElement('div');
        gridCard.classList.add('grid-card');
        
        // Create title
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = cardInfo.title;


        
        // Create paragraph
        const cardParagraph = document.createElement('p');
        cardParagraph.textContent = cardInfo.content;
        
        // Create button
        const cardButton = document.createElement('button');
        cardButton.classList.add('btn', cardInfo.buttonClass);
        cardButton.textContent = cardInfo.buttonText;
        

        const icon = document.createElement('i');
        icon.classList.add('bi', cardInfo.iconClass);


        // Add event listener to button
        cardButton.addEventListener('click', function() {
            alert(`You clicked ${cardInfo.title}!`);
        });
        
        // Append elements to grid card
        gridCard.appendChild(cardTitle);
        gridCard.appendChild(cardParagraph);
        gridCard.appendChild(cardButton);
        gridCard.appendChild(icon);
        
        // Append grid card to column
        col.appendChild(gridCard);
        
        // Append column to row
        row.appendChild(col);
    });
    
    // Append row to container
    container.appendChild(row);
    
    // Append container to body
    document.body.appendChild(container);
});
