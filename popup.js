document.addEventListener("DOMContentLoaded", function () {
    // Get all buttons with the class 'btn'
    const buttons = document.querySelectorAll(".btn");

    // Add event listeners to each button
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // Get the text of the button clicked
            const buttonText = this.textContent;

            // Handle different button clicks
            switch (buttonText) {
                case "Total Amount":
                    alert("The total amount is $100.");
                    break;
                case "Name":
                    alert("User Name: John Doe");
                    break;
                case "Number":
                    alert("Contact Number: 123-456-7890");
                    break;
                case "E-mail":
                    alert("E-mail Address: john.doe@example.com");
                    break;
                case "Payment Method":
                    alert("Payment Method: Credit Card");
                    break;
                case "Address":
                    alert("Address: 123 Main St, Cityville");
                    break;
                case "State":
                    alert("State: California");
                    break;
                case "City":
                    alert("City: Los Angeles");
                    break;
                case "PinCode":
                    alert("Pin Code: 90001");
                    break;
                case "Continue Shopping":
                    alert("Redirecting to the shopping page...");
                    window.location.href = "shopping.html"; // Redirect to the shopping page
                    break;
                default:
                    alert("Button clicked: " + buttonText);
            }
        });
    });
});
