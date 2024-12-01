
document.addEventListener("DOMContentLoaded", function() {
    let cartItems = [
        { id: 1, name: "Apples", quantity: 2, price: 145.00 },
        { id: 2, name: "Bananas", quantity: 2, price: 55.00 },
        { id: 3, name: "Carrots", quantity: 1, price: 90.00 },
        { id: 4, name: "Onion", quantity: 4, price: 45.00 }
    ];

    function updateCart() {
        const cartBody = document.getElementById("cart-body");
        cartBody.innerHTML = "";

        let total = 0;

        cartItems.forEach(item => {
            const itemTotal = item.quantity * item.price;
            total += itemTotal;

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>₹${item.price.toFixed(2)}</td>
                <td>₹${itemTotal.toFixed(2)}</td>
                <td><button onclick="removeItem(${item.id})">Remove</button></td>
            `;

            cartBody.appendChild(row);
        });

        document.getElementById("cart-total").innerText = `Total: ₹${total.toFixed(2)}`;
    }

    window.removeItem = function(id) {
        cartItems = cartItems.filter(item => item.id !== id);
        updateCart();
    };

    window.checkout = function() {
        alert("Proceeding to checkout. Total amount: $" + document.getElementById("cart-total").innerText.split('$')[1]);
    };

    updateCart();
});
