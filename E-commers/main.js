let cart = [];

// Load the cart from localStorage when the page is loaded
window.onload = function () {
  loadCart();
  renderCart();
};

// Function to add items to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCartCount();
  saveCart();
}

// Function to update the cart count in the header
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Save the cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Load the cart from localStorage
function loadCart() {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  if (savedCart) {
    cart = savedCart;
    updateCartCount();
  }
}

// Render the cart items on the cart page
function renderCart() {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

// Checkout function to clear the cart and reset cart count
function checkout() {
  if (cart.length > 0) {
    alert('Thank you for your purchase!');

    // Clear the cart
    cart = [];
    localStorage.removeItem('cart');

    // Update cart count
    updateCartCount();

    // Clear the cart list on the page
    renderCart();

    // Reset the cart total to 0
    document.getElementById('cart-total').textContent = '0.00';
  } else {
    alert('Your cart is empty.');
  }
}

// Predefined product list
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
];

// Predefined login handling, etc.
