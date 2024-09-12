// Get form and elements
const form = document.getElementById('signupForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const categoryField = document.getElementById('category');
const errorMsg = document.getElementById('error-msg');

// Sign up validation logic
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get entered values
    const enteredName = nameField.value;
    const enteredEmail = emailField.value;
    const enteredPassword = passwordField.value;
    const selectedCategory = categoryField.value;

    // Simple validation logic
    if (!enteredName || !enteredEmail || !enteredPassword || selectedCategory === "default") {
        errorMsg.textContent = 'All fields are required!';
    } else {
        alert('Sign Up Successful!');
        errorMsg.textContent = ''; // Clear any previous error message
        // You can clear the form fields or redirect to another page here
        form.reset();
    }
});
