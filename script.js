document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.getElementById("add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    
    let cart = [];
    let productPrice = 49.99;

    addToCartBtn.addEventListener("click", function () {
        let quantity = parseInt(document.getElementById("quantity").value);
        if (quantity < 1) return;

        let item = {
            name: "Awesome Product",
            price: productPrice,
            quantity: quantity
        };

        cart.push(item);
        updateCart();
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;

            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.style.marginLeft = "10px";
            removeBtn.onclick = function () {
                cart.splice(index, 1);
                updateCart();
            };

            li.appendChild(removeBtn);
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    }
});
