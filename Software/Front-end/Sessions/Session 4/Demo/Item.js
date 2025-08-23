import { cards, cardDetails } from '../data/Data.js';




// Ensure Bootstrap CSS (safe if duplicated)
const ensureBootstrap = () => {
  const href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
  const exists = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
    .some(l => l.href.includes('bootstrap.min.css'));
  if (!exists) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }
};

const formatPrice = (price) => {
    if (typeof price === 'number') {
        return `$${price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`;
    } 
    else if (price !== null && price !== undefined) {
        return String(price);
    } 
    else if (price === 0) {
        return 'Free';
    }
    else {
        return 'N/A';
    }
}

const getItemById = (id) => cards.find(c => c.id === id) || null;

const buildNotFound = () => {
  
  const container = document.createElement('div');
  container.className = 'container my-5';

  const alert = document.createElement('div');
  alert.className = 'alert alert-warning';
  alert.textContent = 'Sorry, the item you are looking for was not found.';

  const actions = document.createElement('div');
  actions.className = 'mt-3';

  const backBtn = document.createElement('a');
  backBtn.className = 'btn btn-secondary me-2';
  backBtn.href = 'index.html';
  backBtn.textContent = 'Back to Grid';

  const homeBtn = document.createElement('a');
  homeBtn.className = 'btn btn-outline-primary';
  homeBtn.href = 'Home.html';
  homeBtn.textContent = 'Go Home';

  actions.appendChild(backBtn);
  actions.appendChild(homeBtn);

  container.appendChild(alert);
  container.appendChild(actions);
  return container;
};

const buildItemView = (card, details) => {
  const container = document.createElement('div');
  container.className = 'container my-4';

  // Title
  const title = document.createElement('h1');
  title.className = 'mb-4';
  title.textContent = card.title;

  // Row
  const row = document.createElement('div');
  row.className = 'row g-4';

  // Left: image
  const colImg = document.createElement('div');
  colImg.className = 'col-md-6';
  const img = document.createElement('img');
  img.className = 'img-fluid rounded shadow-sm';
  img.alt = card.title;
  img.src = details?.imageUrl || 'https://via.placeholder.com/800x600?text=No+Image';
  colImg.appendChild(img);

  // Right: details
  const colInfo = document.createElement('div');
  colInfo.className = 'col-md-6';

  const infoCard = document.createElement('div');
  infoCard.className = 'card shadow-sm';
  const infoBody = document.createElement('div');
  infoBody.className = 'card-body';

  const seller = document.createElement('p');
  seller.className = 'mb-2';
  seller.innerHTML = `<strong>Seller:</strong> ${details?.seller ?? 'N/A'}`;

  const price = document.createElement('p');
  price.className = 'mb-2';
  price.innerHTML = `<strong>Price:</strong> ${formatPrice(details?.price)}`;

  const rating = document.createElement('p');
  rating.className = 'mb-2';
  rating.innerHTML = `<strong>Rating:</strong> ${(details?.rating ?? 'N/A')} ⭐ (${details?.reviewsCount ?? 0} reviews)`;

  const stock = document.createElement('p');
  stock.className = 'mb-2';
  stock.innerHTML = `<strong>Stock:</strong> ${details?.stock ?? 'N/A'}`;

  const sold = document.createElement('p');
  sold.className = 'mb-3';
  sold.innerHTML = `<strong>Sold:</strong> ${details?.soldCount ?? 0}`;

  const desc = document.createElement('p');
  desc.textContent = details?.longDescription || card.content || '';

  // Actions
  const actions = document.createElement('div');
  const backBtn = document.createElement('a');
  backBtn.href = 'index.html';
  backBtn.className = 'btn btn-secondary me-2';
  backBtn.textContent = 'Back to Grid';

  const buyBtn = document.createElement('button');
  buyBtn.type = 'button';
  buyBtn.className = 'btn btn-primary';
  buyBtn.textContent = 'Add to Cart';
  buyBtn.addEventListener('click', () => {
    // Placeholder action
    alert('Added to cart!');
  });

  actions.appendChild(backBtn);
  actions.appendChild(buyBtn);

  infoBody.appendChild(seller);
  infoBody.appendChild(price);
  infoBody.appendChild(rating);
  infoBody.appendChild(stock);
  infoBody.appendChild(sold);
  infoBody.appendChild(desc);
  infoBody.appendChild(actions);

  infoCard.appendChild(infoBody);
  colInfo.appendChild(infoCard);

  row.appendChild(colImg);
  row.appendChild(colInfo);

  container.appendChild(title);
  container.appendChild(row);

  return container;
};

const render = () => {
  ensureBootstrap();
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';

  const params = new URLSearchParams(window.location.search);
  const idRaw = params.get('id');
  const id = idRaw ? Number(idRaw) : NaN;

  if (!Number.isInteger(id)) {
    app.appendChild(buildNotFound());
    return;
  }

  const card = getItemById(id);
  const details = cardDetails[id];

  if (!card || !details) {
    app.appendChild(buildNotFound());
    return;
  }

  app.appendChild(buildItemView(card, details));
};

// Render when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render);
} else {
  render();
}
