// // ===============================
// // CART JS
// // ===============================

// // Get cart from localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];


// // ===============================
// // GET HTML ELEMENTS
// // ===============================

// const cartItems = document.getElementById("cartItems");
// const cartCount = document.getElementById("cartCount");
// const totalItems = document.getElementById("totalItems");
// const cartTotal = document.getElementById("cartTotal");
// const checkoutBtn = document.getElementById("checkoutBtn");


// // ===============================
// // DISPLAY CART
// // ===============================

// function displayCart() {

//     cartItems.innerHTML = "";

//     // If cart is empty
//     if (cart.length === 0) {

//         cartItems.innerHTML = `
//             <div class="card shadow-sm">
//                 <div class="card-body text-center py-5">

//                     <i class="bi bi-cart-x fs-1"></i>

//                     <h4 class="mt-3">
//                         Your cart is empty
//                     </h4>

//                     <p>
//                         Add some delicious items from our menu.
//                     </p>

//                     <a href="menu.html" class="btn btn-dark">
//                         Go to Menu
//                     </a>

//                 </div>
//             </div>
//         `;

//         updateSummary();
//         return;
//     }


//     // Display each product
//     cart.forEach(function (item, index) {

//         const price = parseInt(item.price.replace("₹", ""));

//         cartItems.innerHTML += `

//             <div class="card shadow-sm mb-3">

//                 <div class="card-body">

//                     <div class="row align-items-center">

//                         <!-- Image -->
//                         <div class="col-md-2">

//                             <img src="${item.image}"
//                                 class="img-fluid rounded"
//                                 style="height: 100px; width: 100px; object-fit: cover;">

//                         </div>


//                         <!-- Product Information -->
//                         <div class="col-md-4">

//                             <h5>${item.name}</h5>

//                             <p class="text-muted mb-1">
//                                 ${item.description}
//                             </p>

//                             <strong>
//                                 ₹${price}
//                             </strong>

//                         </div>


//                         <!-- Quantity -->
//                         <div class="col-md-3">

//                             <div class="d-flex align-items-center">

//                                 <button
//                                     class="btn btn-outline-dark"
//                                     onclick="decreaseQuantity(${index})">
//                                     −
//                                 </button>

//                                 <span class="mx-3">
//                                     ${item.quantity}
//                                 </span>

//                                 <button
//                                     class="btn btn-outline-dark"
//                                     onclick="increaseQuantity(${index})">
//                                     +
//                                 </button>

//                             </div>

//                         </div>


//                         <!-- Remove -->
//                         <div class="col-md-3 text-md-end mt-3 mt-md-0">

//                             <p>
//                                 <strong>
//                                     ₹${price * item.quantity}
//                                 </strong>
//                             </p>

//                             <button
//                                 class="btn btn-danger btn-sm"
//                                 onclick="removeItem(${index})">

//                                 <i class="bi bi-trash"></i>
//                                 Remove

//                             </button>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//         `;
//     });


//     updateSummary();
// }


// // ===============================
// // INCREASE QUANTITY
// // ===============================

// function increaseQuantity(index) {

//     cart[index].quantity++;

//     saveCart();

//     displayCart();
// }


// // ===============================
// // DECREASE QUANTITY
// // ===============================

// function decreaseQuantity(index) {

//     if (cart[index].quantity > 1) {

//         cart[index].quantity--;

//     } else {

//         cart.splice(index, 1);

//     }

//     saveCart();

//     displayCart();
// }


// // ===============================
// // REMOVE PRODUCT
// // ===============================

// function removeItem(index) {

//     cart.splice(index, 1);

//     saveCart();

//     displayCart();
// }


// // ===============================
// // UPDATE SUMMARY
// // ===============================

// function updateSummary() {

//     let items = 0;
//     let total = 0;


//     cart.forEach(function (item) {

//         const price = parseInt(item.price.replace("₹", ""));

//         items += item.quantity;

//         total += price * item.quantity;

//     });


//     totalItems.textContent = items;

//     cartTotal.textContent = "₹" + total;

//     cartCount.textContent = items;
// }


// // ===============================
// // SAVE CART
// // ===============================

// function saveCart() {

//     localStorage.setItem("cart", JSON.stringify(cart));

// }


// // ===============================
// // CHECKOUT
// // ===============================

// checkoutBtn.addEventListener("click", function () {

//     if (cart.length === 0) {

//         alert("Your cart is empty!");

//         return;
//     }

//     alert("Checkout feature coming soon!");

// });


// // ===============================
// // LOAD CART
// // ===============================

// displayCart();

// ===============================
// GET CART FROM LOCAL STORAGE
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ===============================
// GET HTML ELEMENTS
// ===============================

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalItems = document.getElementById("totalItems");
const cartTotal = document.getElementById("cartTotal");


// ===============================
// DISPLAY CART
// ===============================

function displayCart() {

    cartItems.innerHTML = "";


    // Check if cart is empty
    if (cart.length === 0) {

        cartItems.innerHTML = `
        
            <div class="card shadow-sm">
                <div class="card-body text-center py-5">

                    <i class="bi bi-cart-x fs-1"></i>

                    <h4 class="mt-3">
                        Your Cart is Empty
                    </h4>

                    <p>
                        Please add some products from our menu.
                    </p>

                    <a href="menu.html" class="btn btn-coffee">
                        Go to Menu
                    </a>

                </div>
            </div>
        
        `;

        updateSummary();

        return;
    }


    // Show products
    cart.forEach(function (item, index) {

        const price = parseInt(item.price.replace("₹", ""));

        const totalPrice = price * item.quantity;


        cartItems.innerHTML += `
        
            <div class="card shadow-sm mb-3">

                <div class="card-body">

                    <div class="row align-items-center">

                        <!-- Product Image -->
                        <div class="col-md-2">

                            <img 
                                src="${item.image}"
                                class="img-fluid rounded"
                                style="
                                    width: 100px;
                                    height: 100px;
                                    object-fit: cover;
                                "
                            >

                        </div>


                        <!-- Product Details -->
                        <div class="col-md-4">

                            <h5>
                                ${item.name}
                            </h5>

                            <p class="text-muted">
                                ${item.description}
                            </p>

                            <strong>
                                ₹${price}
                            </strong>

                        </div>


                        <!-- Quantity -->
                        <div class="col-md-2">

                            <button 
                                class="btn btn-outline-dark btn-sm"
                                onclick="decreaseQuantity(${index})">
                                −
                            </button>

                            <span class="mx-2">
                                ${item.quantity}
                            </span>

                            <button 
                                class="btn btn-outline-dark btn-sm"
                                onclick="increaseQuantity(${index})">
                                +
                            </button>

                        </div>


                        <!-- Total -->
                        <div class="col-md-2">

                            <strong>
                                ₹${totalPrice}
                            </strong>

                        </div>


                        <!-- Remove Button -->
                        <div class="col-md-2">

                            <button
                                class="btn btn-danger btn-sm"
                                onclick="removeItem(${index})">

                                <i class="bi bi-trash"></i>
                                Remove

                            </button>

                        </div>

                    </div>

                </div>

            </div>
        
        `;

    });


    updateSummary();
}


// ===============================
// INCREASE QUANTITY
// ===============================

function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

    displayCart();
}


// ===============================
// DECREASE QUANTITY
// ===============================

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();

    displayCart();
}


// ===============================
// REMOVE PRODUCT
// ===============================

function removeItem(index) {

    // Remove product from array
    cart.splice(index, 1);

    // Save updated cart
    saveCart();

    // Show updated cart
    displayCart();

}


// ===============================
// SAVE CART
// ===============================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


// ===============================
// UPDATE SUMMARY
// ===============================

function updateSummary() {

    let items = 0;
    let total = 0;


    cart.forEach(function (item) {

        const price = parseInt(
            item.price.replace("₹", "")
        );

        items += item.quantity;

        total += price * item.quantity;

    });


    // Update cart number
    cartCount.textContent = items;


    // Update total items
    totalItems.textContent = items;


    // Update total price
    cartTotal.textContent = "₹" + total;

}


// ===============================
// LOAD CART
// ===============================

displayCart();