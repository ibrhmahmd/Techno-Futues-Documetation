// Data.js - exposes static card and account data 
export const cards = [
    {
      id: 1,
      title: 'Travel Deals',
      content: 'Explore amazing flight discounts for your next adventure.',
      buttonText: 'Book Now',
      buttonClass: 'btn-primary',
      iconClass: 'bi-airplane'
    },
    {
      id: 2,
      title: 'Birthday Bash',
      content: 'Plan the ultimate birthday party with our checklist.',
      buttonText: 'Party Time',
      buttonClass: 'btn-success',
      iconClass: 'bi-balloon-fill'
    },
    {
      id: 3,
      title: 'Photo Gallery',
      content: 'View stunning images from around the world.',
      buttonText: 'View Gallery',
      buttonClass: 'btn-warning',
      iconClass: 'bi-images'
    },
    {
      id: 4,
      title: 'Healthy Recipes',
      content: 'Cook nutritious meals in under 30 minutes.',
      buttonText: 'Cook Now',
      buttonClass: 'btn-danger',
      iconClass: 'bi-egg-fried'
    },
    {
      id: 5,
      title: 'Tech News',
      content: 'Stay updated with the latest tech trends and gadgets.',
      buttonText: 'Read More',
      buttonClass: 'btn-info',
      iconClass: 'bi-cpu'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      content: 'Track your workouts and progress over time.',
      buttonText: 'Track',
      buttonClass: 'btn-dark',
      iconClass: 'bi-activity'
    },
    {
      id: 7,
      title: 'Music Playlist',
      content: 'Listen to curated playlists for every mood.',
      buttonText: 'Listen',
      buttonClass: 'btn-secondary',
      iconClass: 'bi-music-note-beamed'
    },
    {
      id: 8,
      title: 'Weather Update',
      content: 'Get real-time weather updates for your city.',
      buttonText: 'Check Weather',
      buttonClass: 'btn-primary',
      iconClass: 'bi-cloud-sun'
    },
    {
      id: 9,
      title: 'Finance Tips',
      content: 'Learn to manage your finances like a pro.',
      buttonText: 'Learn',
      buttonClass: 'btn-success',
      iconClass: 'bi-cash-stack'
    },
    {
      id: 10,
      title: 'Language Courses',
      content: 'Start learning a new language today.',
      buttonText: 'Enroll',
      buttonClass: 'btn-warning',
      iconClass: 'bi-book'
    }
  ];



  
  export const accounts = [
    { email: 'user1@example.com', password: 'password1', username:"ibrahim", img: "https://randomuser.me/api/portraits/men/5.jpg"},
    { email: 'user2@example.com', password: 'password2' ,username:"mohamed", img: "https://randomuser.me/api/portraits/men/2.jpg"},
    { email: 'user3@example.com', password: 'password3' ,username:"salem", img: "https://randomuser.me/api/portraits/men/3.jpg"},
    { email: 'user4@example.com', password: 'password4' ,username:"ali", img: "https://randomuser.me/api/portraits/men/4.jpg"}
  ];







// Additional details for each card, keyed by id
export const cardDetails = {
  1: {
    imageUrl: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200',
    seller: 'SkyWay Travels',
    price: 499.99,
    rating: 4.6,
    reviewsCount: 321,
    stock: 'Available',
    soldCount: 1200,
    longDescription: 'Exclusive travel deals to top destinations. Save big on flights and hotels for your next journey.'
  },
  2: {
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200',
    seller: 'PartyBox Co.',
    price: 89.99,
    rating: 4.4,
    reviewsCount: 198,
    stock: 'In stock',
    soldCount: 540,
    longDescription: 'Everything you need to throw an unforgettable birthday bash. Decorations, checklists, and more.'
  },
  3: {
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
    seller: 'WorldShots',
    price: 0.0,
    rating: 4.8,
    reviewsCount: 870,
    stock: 'Unlimited',
    soldCount: 5000,
    longDescription: 'Browse a curated gallery of stunning images from around the globe. Get inspired by visual stories.'
  },
  4: {
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200',
    seller: 'QuickBite',
    price: 19.99,
    rating: 4.3,
    reviewsCount: 156,
    stock: 'In stock',
    soldCount: 320,
    longDescription: 'Nutritious recipes you can cook in under 30 minutes. Eat healthy without sacrificing taste.'
  },
  5: {
    imageUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200',
    seller: 'TechToday',
    price: 0.0,
    rating: 4.7,
    reviewsCount: 1100,
    stock: 'Unlimited',
    soldCount: 7600,
    longDescription: 'Stay up to date with the latest technology news, gadgets, and trends from around the world.'
  },
  6: {
    imageUrl: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=1200',
    seller: 'FitPulse',
    price: 29.99,
    rating: 4.2,
    reviewsCount: 245,
    stock: 'In stock',
    soldCount: 980,
    longDescription: 'Track your workouts and monitor progress over time with easy-to-use fitness tools.'
  },
  7: {
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200',
    seller: 'TuneStream',
    price: 9.99,
    rating: 4.5,
    reviewsCount: 640,
    stock: 'In stock',
    soldCount: 2500,
    longDescription: 'Curated playlists for every mood and moment. Discover new music tailored to your taste.'
  },
  8: {
    imageUrl: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=1200',
    seller: 'Weatherly',
    price: 0.0,
    rating: 4.1,
    reviewsCount: 410,
    stock: 'Unlimited',
    soldCount: 15000,
    longDescription: 'Real-time weather updates and forecasts for your city. Plan your day with confidence.'
  },
  9: {
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200',
    seller: 'FinancePro',
    price: 14.99,
    rating: 4.6,
    reviewsCount: 520,
    stock: 'In stock',
    soldCount: 2100,
    longDescription: 'Practical finance tips to help you budget, save, and invest more effectively.'
  },
  10: {
    imageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200',
    seller: 'LinguaHub',
    price: 49.99,
    rating: 4.9,
    reviewsCount: 1320,
    stock: 'In stock',
    soldCount: 4300,
    longDescription: 'Kickstart your language learning journey with engaging courses designed for all levels.'
  }
};

