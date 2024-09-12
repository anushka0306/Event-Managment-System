document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons
    const homeButton = document.querySelector(".button:nth-child(1)");
    const logoutButton = document.querySelector(".logout");
    const membershipButton = document.querySelector(".sidebar .button:nth-child(1)");
    const userManagementButton = document.querySelector(".sidebar .button:nth-child(2)");
    const addButtons = document.querySelectorAll(".main .section .button:nth-child(1)");
    const updateButtons = document.querySelectorAll(".main .section .button:nth-child(2)");

    // Event listener for Home button
    homeButton.addEventListener("click", function () {
        alert("Redirecting to Home page...");
        // Add logic for redirecting to the home page here
    });

    // Event listener for LogOut button
    logoutButton.addEventListener("click", function () {
        alert("Logging out...");
        // Add logic for logging out here
    });

    // Event listener for Membership button
    membershipButton.addEventListener("click", function () {
        alert("Navigating to Membership section...");
        // Add logic for navigating to Membership section here
    });

    // Event listener for User Management button
    userManagementButton.addEventListener("click", function () {
        alert("Navigating to User Management section...");
        // Add logic for navigating to User Management section here
    });

    // Event listeners for Add buttons
    addButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Adding new item...");
            // Add logic for adding new item here
        });
    });

    // Event listeners for Update buttons
    updateButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Updating existing item...");
            // Add logic for updating an existing item here
        });
    });
});
