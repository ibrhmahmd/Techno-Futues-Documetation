import { cards } from '../data/Data.js';

let CdnLink = document.createElement('link');
CdnLink.rel = 'stylesheet';
CdnLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
document.head.appendChild(CdnLink);

const app = document.getElementById('app');

// Build grid with imported data
createGrid(cards);


function createGrid(cardData) {
    // Create container
    const container = document.createElement('div');
    container.classList.add('container', 'mt-4');

    // Create title
    const title = document.createElement('h1');
    title.classList.add('text-center', 'mb-4');
    title.textContent = 'Grid Layout Demo';
    container.appendChild(title);

    // Create row
    const row = document.createElement('div');
    row.classList.add('row');

    // Create cards
    cardData.forEach(cardInfo => {
        // Create column
        const col = document.createElement('div');
        col.classList.add('col-lg-3', 'col-md-6', 'col-sm-12');

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

        // Add event listener to button
        cardButton.addEventListener('click', function () {
            const id = cardInfo.id;
            
            if (typeof id === 'number') {
                // index.html and Item.html are in the same folder
                window.location.href = 'Item.html?id=' + id;
            } else {
                console.warn('Missing id for card', cardInfo);
            }
        });

        // Append elements to grid card
        gridCard.appendChild(cardTitle);
        gridCard.appendChild(cardParagraph);
        gridCard.appendChild(cardButton);

        // Append grid card to column
        col.appendChild(gridCard);

        // Append column to row
        row.appendChild(col);
    });

    // Append row to container
    container.appendChild(row);

    // Append container to body
    app.appendChild(container);
}
