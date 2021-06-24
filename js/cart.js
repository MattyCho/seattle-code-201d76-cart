/* global Cart */
'use strict';

// try playing with document.querySelector to target elements without an id.


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.querySelector("tbody").innerHTML = "";
  // document.getElementsByTagName(tbody).innerHTML("");
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbodyElem = table.querySelector("tbody");
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    let trElem = document.createElement('tr');
    tbodyElem.appendChild(trElem);
    let tdXElem = document.createElement('td');
    tdXElem.setAttribute('id', cart.items[i].product);
    tdXElem.textContent = 'X';
    trElem.appendChild(tdXElem);
    let tdQuantityElem = document.createElement('td');
    tdQuantityElem.textContent = cart.items[i].quantity;
    trElem.appendChild(tdQuantityElem)
    let tdProductElem = document.createElement('td');
    tdProductElem.textContent = cart.items[i].product;
    trElem.appendChild(tdProductElem);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let removeThisItem = event.target.id
  for (let i = 0; i < cart.items.length; i++) {
    if (removeThisItem === cart.items[i].product) {
      cart.removeItem(cart.items[i]);
    }
  }
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
