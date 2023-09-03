let countCart = 0;
const cartIcon = document.querySelector('section#cart');
const cartMenu = document.querySelector('div#cart-menu');
const buyButton = document.querySelector('button#comprar')

cartIcon.addEventListener("click", () => {
    if (cartMenu.style.display === 'block') {
        cartMenu.style.display = 'none';
        document.body.classList.remove('no-scroll');
        document.body.style.overflow = 'auto';
    } else {
        cartMenu.style.display = 'block';
        document.body.classList.add('no-scroll');
        document.body.style.overflow = 'hidden';
    }

    if (countCart === 0) {
        updateCartmenu(product)
        cartMenu.insertBefore(buyButton, cartMenu.firstChild)
    } else {
        updateCartmenu(product)
        cartMenu.appendChild(buyButton)
    }
})
function addToCart(productId) {
    const product = getProductDetails(productId);
    if (product) {
        updateCartmenu(product);
        countCart++;
        updateCount();

        cartMenu.appendChild(buyButton)

    }
}

function updateCartmenu(product) {
    const cartMenuElement = document.querySelector('div#cart-menu');
    addElementToCart(product, cartMenuElement);
}

function updateCount() {
    const cartCountElement = document.querySelector('div#cart-count');
    cartCountElement.textContent = countCart;
}

function addElementToCart(product, cartMenuElement) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-menu-item');

    const productImg = document.createElement('img');
    productImg.src = product.imgSrc; 
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
