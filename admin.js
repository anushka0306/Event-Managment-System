// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to buttons
    const homeButton = document.querySelector(".top-left");
    const logoutButton = document.querySelector(".top-right");
    const maintainUserButton = document.querySelector(".bottom-left");
    const maintainVendorButton = document.querySelector(".bottom-right");

    // Home button functionality
    homeButton.addEventListener("click", function () {
        alert("Navigating to Home Page...");
        // Simulate navigation or add your home page link
        // window.location.href = "home.html";
    });

    // Logout button functionality
    logoutButton.addEventListener("click", function () {
        alert("Logging out...");
        // Perform logout actions here, like clearing session or redirecting
        // window.location.href = "logout.html";
    });

    // Maintain User button functionality
    maintainUserButton.addEventListener("click", function () {
        alert("Navigating to User Maintenance Page...");
        // Simulate navigation or add your user maintenance page link
        // window.location.href = "maintain-user.html";
    });

    // Maintain Vendor button functionality
    maintainVendorButton.addEventListener("click", function () {
        alert("Navigating to Vendor Maintenance Page...");
        // Simulate navigation or add your vendor maintenance page link
        // window.location.href = "maintain-vendor.html";
    });
});
