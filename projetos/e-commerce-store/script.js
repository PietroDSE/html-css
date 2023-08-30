let countCart = 0;
const cartIcon = document.getElementById('cart');
const cartMenu = document.getElementById('cart-menu');


cartIcon.addEventListener("click", () => {
    cartMenu.style.display = cartMenu.style.display === 'block' ? 'none' : 'block';

});

function addToCart(productId) {
    const product = getProductDetails(productId);
    if (product) {
        updateCartmenu(product);
        countCart++;
        updateCount();
    }
}

function updateCartmenu(product){
    const cartMenuElement = document.querySelector('div#cart-menu');
    addElementToCart(product, cartMenuElement);
}

function updateCount() {
    const cartCountElement = document.querySelector('div#cart-count');
    cartCountElement.textContent = countCart;
}

function addElementToCart(product, cartMenuElement){
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-menu-item');

    const productImg = document.createElement('img');
    productImg.src = product.imgSrc; // Assuming the "imgSrc" property contains the image URL
    cartItem.appendChild(productImg);

    const productName = document.createElement('p');
    productName.textContent = product.name;
    cartItem.appendChild(productName);

    cartMenuElement.appendChild(cartItem);
}

function getProductDetails(productId) {
    const productElement = document.querySelector(`div.product[data-product-id="${productId}"]`);

    if (productElement) {
        const productImg = productElement.querySelector('img');
        const productName = productElement.querySelector('p');
        return {
            imgSrc: productImg.src,
            name: productName.textContent,
        };
    }

    return null;
}
