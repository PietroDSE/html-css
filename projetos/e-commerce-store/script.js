

let countCart = 0;
const cartIcon = document.getElementById('cart')
const cartMenu = document.getElementById('cart-menu')

cartIcon.addEventListener("click", () => {
    cartMenu.style.display = cartMenu.style.display === 'block' ? 'none' : 'block'
})

function addToCart(productId) {
    // Adicionar o produto ao carrinho
    countCart++;
    updateCount();
}

function updateCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = countCart;
}
