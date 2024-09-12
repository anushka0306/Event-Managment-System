document.addEventListener("DOMContentLoaded", function () {
    // Handle "Add to Cart" button clicks
    const addToCartButtons = document.querySelectorAll(".product button");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.parentElement.children[0].textContent;
            alert(productName + " has been added to your cart.");
        });
    });

    // Handle "Products" button click
    const productsButton = document.querySelector(".products");
    productsButton.addEventListener("click", function () {
        alert("Showing all products...");
        // You can add any functionality here, like filtering or loading products dynamically
    });

    // Handle "Home" button click
    const homeButton = document.querySelector(".navbar button:first-child");
    homeButton.addEventListener("click", function () {
        alert("Returning to the home page...");
        window.location.href = "home.html"; // Redirect to the home page
    });

    // Handle "LogOut" button click
    const logoutButton = document.querySelector(".navbar button:last-child");
    logoutButton.addEventListener("click", function () {
        alert("Logging out...");
        window.location.href = "login.html"; // Redirect to the login page
    });
});
