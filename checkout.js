// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // References to the buttons
    const itemButton = document.querySelector(".header button");
    const detailsButton = document.querySelector(".sub-header button");
    const nameButton = document.querySelector(".left button:nth-child(1)");
    const emailButton = document.querySelector(".left button:nth-child(2)");
    const addressButton = document.querySelector(".left button:nth-child(3)");
    const cityButton = document.querySelector(".left button:nth-child(4)");
    const numberButton = document.querySelector(".right button:nth-child(1)");
    const paymentMethodButton = document.querySelector(".right button:nth-child(2)");
    const stateButton = document.querySelector(".right button:nth-child(3)");
    const pinCodeButton = document.querySelector(".right button:nth-child(4)");
    const orderNowButton = document.querySelector(".footer button");

    // Function to handle button clicks
    function handleButtonClick(buttonName) {
        alert(`You clicked on ${buttonName}`);
    }

    // Attach event listeners to buttons
    itemButton.addEventListener("click", function () { handleButtonClick("Item"); });
    detailsButton.addEventListener("click", function () { handleButtonClick("Details"); });
    nameButton.addEventListener("click", function () { handleButtonClick("Name"); });
    emailButton.addEventListener("click", function () { handleButtonClick("E-mail"); });
    addressButton.addEventListener("click", function () { handleButtonClick("Address"); });
    cityButton.addEventListener("click", function () { handleButtonClick("City"); });
    numberButton.addEventListener("click", function () { handleButtonClick("Number"); });
    paymentMethodButton.addEventListener("click", function () { handleButtonClick("Payment Method"); });
    stateButton.addEventListener("click", function () { handleButtonClick("State"); });
    pinCodeButton.addEventListener("click", function () { handleButtonClick("Pin Code"); });
    orderNowButton.addEventListener("click", function () { handleButtonClick("Order Now"); });
});
