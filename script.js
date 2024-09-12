// Get form and elements
const form = document.getElementById('loginForm');
const userIdField = document.getElementById('userid');
const passwordField = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');
const cancelBtn = document.getElementById('cancelBtn');

// Login validation logic
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get entered values
    const enteredUserId = userIdField.value;
    const enteredPassword = passwordField.value;

    // Check if entered credentials are correct
    if (enteredUserId === 'Admin' && enteredPassword === 'Admin') {
        alert('Login Successful!');
        errorMsg.textContent = ''; // Clear any previous error message
        // You can redirect to another page here, e.g., window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = 'Invalid User Id or Password!';
        errorMsg.style.color = 'red';
    }
});

// Clear input fields and error message on Cancel button click
cancelBtn.addEventListener('click', function() {
    userIdField.value = '';
    passwordField.value = '';
    errorMsg.textContent = ''; // Clear any error message
});
