document.addEventListener("DOMContentLoaded", function () {
    // Get references to the input fields and buttons
    const userIdInput = document.getElementById("user-id");
    const passwordInput = document.getElementById("password");
    const cancelButton = document.querySelector(".cancel-btn");
    const loginButton = document.querySelector(".login-btn");

    // Function to handle the login button click
    loginButton.addEventListener("click", function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the values from the input fields
        const userId = userIdInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (userId === "" || password === "") {
            alert("Please fill in both User ID and Password.");
            return;
        }

        // Check for a valid User ID and Password
        if (userId === "Admin" && password === "Admin") {
            alert("Login successful!");
            // Redirect or perform further actions here
        } else {
            alert("Invalid User ID or Password. Please try again.");
        }
    });

    // Function to handle the cancel button click
    cancelButton.addEventListener("click", function () {
        // Clear the input fields
        userIdInput.value = "";
        passwordInput.value = "";
    });
});
