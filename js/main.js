const myCoupang = document.querySelector('.myCoupang');
const cart = document.querySelector('.cart');

myCoupang.addEventListener('mouseenter', addActive);
myCoupang.addEventListener('mouseleave', removeActive);

cart.addEventListener('mouseenter', addEmpty);
cart.addEventListener('mouseleave', removeEmpty);

function addActive(event) {
  myCoupang.classList.add('is--active');
}

function removeActive(event) {
  myCoupang.classList.remove('is--active');
}

function addEmpty(event) {
  cart.classList.add('cart--empty');
}

function removeEmpty(event) {
  cart.classList.remove('cart--empty');
}
