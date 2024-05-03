function addProduct() {
    // Get input values
    var productName = document.getElementById("productName").value;
    var productPrice = parseFloat(document.getElementById("productPrice").value).toFixed(2);
    var productImage = document.getElementById("productImage").value;

    // Create product card
    var productList = document.getElementById("productList");
    var productCard = document.createElement("div");
    productCard.className = "product-card";

    var image = document.createElement("img");
    image.src = productImage;
    productCard.appendChild(image);

    var productInfo = document.createElement("div");
    productInfo.className = "product-info";

    var productNameHeading = document.createElement("h2");
    productNameHeading.textContent = productName;
    productInfo.appendChild(productNameHeading);

    var productPricePara = document.createElement("p");
    productPricePara.textContent = "$" + productPrice;
    productInfo.appendChild(productPricePara);

    productCard.appendChild(productInfo);

    // Add card to product list
    productList.appendChild(productCard);

    // Clear form inputs
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productImage").value = "";
}

function clearProducts() {
    var productList = document.getElementById("productList");

    // Remove all child elements from productList
    while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
    }
}
