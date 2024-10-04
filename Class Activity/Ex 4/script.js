// Variables to track selected chocolates and user login status
let selectedOccasion = '';
let basket = [];
let isSignedIn = false;

// Select DOM elements
const signInForm = document.getElementById('sign-in-form');
const selectOccasionSection = document.getElementById('select-occasion');
const selectChocolatesSection = document.getElementById('select-chocolates');
const basketSection = document.getElementById('basket');
const basketIcon = document.querySelector('.basket-icon');
const basketItems = document.getElementById('basket-items');
const chocolateCards = document.querySelectorAll('.chocolate-card');
const welcomeMessage = document.getElementById('welcome-message');
const userEmailDisplay = document.getElementById('user-email');

// Handle Sign-In Form Submission
signInForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    isSignedIn = true;
    userEmailDisplay.textContent = email;
    welcomeMessage.classList.remove('hidden');
    signInForm.classList.add('hidden');
    selectOccasionSection.classList.remove('hidden'); // Show occasion selection section
  } else {
    alert("Please enter valid credentials.");
  }
});

// Handle Occasion Selection
document.querySelectorAll('.occasion-card').forEach(card => {
  card.addEventListener('click', (e) => {
    selectedOccasion = e.currentTarget.getAttribute('data-occasion');
    selectOccasionSection.classList.add('hidden');
    selectChocolatesSection.classList.remove('hidden'); // Show chocolate selection section
  });
});

// Handle Chocolate Selection
chocolateCards.forEach(card => {
  card.querySelector('.add-to-box').addEventListener('click', () => {
    const selectedChocolate = card.getAttribute('data-chocolate');
    basket.push(selectedChocolate);
    updateBasket();
  });
});

// Update Basket Icon and Basket Section
function updateBasket() {
  basketIcon.innerHTML = `Basket (${basket.length})`;
  basketItems.innerHTML = '';

  basket.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    basketItems.appendChild(li);
  });

  if (basket.length > 0) {
    basketSection.classList.remove('hidden'); // Show basket section if there are items
  } else {
    basketSection.classList.add('hidden'); // Hide basket section if empty
  }
}

// Handle Checkout
document.getElementById('checkout').addEventListener('click', () => {
  if (isSignedIn && basket.length > 0) {
    alert(`Proceeding to checkout with the following chocolates: ${basket.join(', ')}`);
  } else {
    alert("Please sign in and select chocolates before checking out.");
  }
});
