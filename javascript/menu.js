const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get selected category
        const filter = button.getAttribute("data-filter");

        // Change active button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
            btn.classList.remove("btn-coffee");
            btn.classList.add("btn-outline-dark");
        });

        button.classList.add("active");
        button.classList.remove("btn-outline-dark");
        button.classList.add("btn-coffee");


        // Show / Hide products
        menuItems.forEach(function (item) {

            const category = item.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});






// ===============================
// ADD TO CART
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cartCount");
const addButtons = document.querySelectorAll(".add-cart");


// Update cart count
function updateCartCount() {

    let totalItems = 0;

    cart.forEach(function (item) {
        totalItems += item.quantity;
    });

    cartCount.textContent = totalItems;
}


// Add product
addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.closest(".menu-item");

        const name = card.querySelector("h5").textContent;
        const description = card.querySelector("p").textContent;
        const price = card.querySelector("strong").textContent;
        const image = card.querySelector("img").src;

        // Check if product already exists
        const existingProduct = cart.find(function (item) {
            return item.name === name;
        });


        if (existingProduct) {

            // Increase quantity
            existingProduct.quantity++;

        } else {

            // Add new product
            cart.push({
                name: name,
                description: description,
                price: price,
                image: image,
                quantity: 1
            });

        }


        // Save cart
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update count
        updateCartCount();

        alert(name + " added to cart!");
    });

});


// Load cart count when page opens
updateCartCount();