let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div>
                ${item.name} - $${item.price}
                <button class="remove-from-cart" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        total += item.price;
    });
    cartContainer.innerHTML += `<div><strong>Total:</strong> $${total.toFixed(2)}</div>`;
}
