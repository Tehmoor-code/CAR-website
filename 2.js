const carListings = document.getElementById('car-listings');

// Generate car data dynamically
const cars = Array.from({ length: 50 }, (_, index) => ({
  make: `Brand ${index + 1}`,
  model: `Model ${index + 1}`,
  year: 2000 + (index % 20),
  price: `$${(20000 + index * 1000).toLocaleString()}`,
}));

// Render car listings
cars.forEach((car, index) => {
  const carCard = document.createElement('div');
  carCard.className = 'car-card';
  carCard.style.animationDelay = `${index * 0.1}s`; // Staggered animation
  carCard.innerHTML = `
    <img src="" alt="Car Image Placeholder">
    <h2>${car.make} ${car.model}</h2>
    <p>Year: ${car.year}</p>
    <p>Price: ${car.price}</p>
  `;
  carListings.appendChild(carCard);
});
