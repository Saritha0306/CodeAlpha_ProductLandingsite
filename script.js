// Display a welcome message in the console
console.log('Welcome to our product landing page!');

// Add an event listener to the "Buy Now" button
const buyButton = document.querySelector('.cta');
buyButton.addEventListener('click', function() {
  // Show a confirmation message when the button is clicked
  alert('Thank you for your purchase!');
});

// Add an event listener to the "Learn More" button
const learnButton = document.querySelector('#learn-more');
learnButton.addEventListener('click', function() {
  // Scroll to the "Features" section when the button is clicked
  const featuresSection = document.querySelector('.features');
  featuresSection.scrollIntoView({ behavior: 'smooth' });
});
