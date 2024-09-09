


let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `<p>${item.name}: R$ ${item.price.toFixed(2)}</p>`;
    });
    document.getElementById('total').innerText = total.toFixed(2);
}

function checkout() {
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}



