// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // References to the input fields and button
    const addButton = document.querySelector(".add-product button");
    const productNameInput = document.querySelector(".add-product input[type='text']:nth-child(1)");
    const productPriceInput = document.querySelector(".add-product input[type='text']:nth-child(2)");
    const productImageInput = document.querySelector(".add-product input[type='file']");
    const productList = document.querySelector(".product-list");

    // Function to add a product to the list
    function addProduct() {
        const productName = productNameInput.value;
        const productPrice = productPriceInput.value;
        const productImageFile = productImageInput.files[0];

        if (!productName || !productPrice || !productImageFile) {
            alert("Please fill out all fields!");
            return;
        }

        // Create a new product item div
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        // Create divs for product image, name, price, and action
        const imageDiv = document.createElement("div");
        const nameDiv = document.createElement("div");
        const priceDiv = document.createElement("div");
        const actionDiv = document.createElement("div");

        imageDiv.classList.add("image");
        nameDiv.textContent = productName;
        priceDiv.textContent = `Rs/- ${productPrice}`;

        // Display the image
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = "50px";
            img.style.height = "50px";
            imageDiv.innerHTML = ""; // Clear the div
            imageDiv.appendChild(img);
        };
        reader.readAsDataURL(productImageFile);

        // Create delete and update buttons
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            productList.removeChild(productItem);
        };

        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.onclick = function () {
            const newName = prompt("Enter new product name:", nameDiv.textContent);
            const newPrice = prompt("Enter new product price:", productPrice);
            if (newName) nameDiv.textContent = newName;
            if (newPrice) priceDiv.textContent = `Rs/- ${newPrice}`;
        };

        // Append buttons to the action div
        actionDiv.appendChild(deleteButton);
        actionDiv.appendChild(updateButton);

        // Append all created divs to the product item
        productItem.appendChild(imageDiv);
        productItem.appendChild(nameDiv);
        productItem.appendChild(priceDiv);
        productItem.appendChild(actionDiv);

        // Append the new product item to the product list
        productList.appendChild(productItem);

        // Clear input fields
        productNameInput.value = "";
        productPriceInput.value = "";
        productImageInput.value = "";
    }

    // Add event listener to the add button
    addButton.addEventListener("click", addProduct);
});
