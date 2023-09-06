let countCart = 0;
const cartIcon = document.querySelector('section#cart');
const cartMenu = document.querySelector('div#cart-menu');
const buyButton = document.querySelector('button#comprar')
const logButton = document.querySelector('button#logIn')
const signbutton = document.querySelector('button#createaccount')
const createDiv = document.querySelector('form#form')
const form = document.querySelector('form#form')
const error = document.querySelector('span#errorBirth')
const formElement = document.querySelector('.formElement')
let createFormIsOpen = false

form.addEventListener('submit', function(event){
    event.preventDefault()

    const name = document.querySelector('input#name')
    const date = document.querySelector('input#dateN')
    const mail = document.querySelector('input#email')
    const pass = document.querySelector('input#pass')
    
    const BirthDate = new Date(date)
    const nowDate = new Date()
    const age = nowDate.getFullYear() - BirthDate.getFullYear()

    if(age >= 115 || age < 18){
    console.log('erro')
    error.innerHTML ='Idade inválida'
    }else{
    error.innerHTML =''
    }
    if(date === '' || mail === '' || pass === '' || name === ''){
        alert('preencha os campos')
    }
})
function toggleForm(){
    if(createFormIsOpen){
        createDiv.style.display ='none'
        document.body.style.overflow ='auto'
    }else{
        document.body.style.overflow ='hidden'
        formElement.style.textAlign ='left'
        formElement.style.display ='flex'
        formElement.style.flexDirection ='column'
        formElement.style.alignItems ='center'
        formElement.style.justifyContent ='center'
        createDiv.style.display ='block'
        createDiv.style.position ='fixed'
        createDiv.style.top ='50%'
        createDiv.style.right ='50%'
        createDiv.style.transform ='translate(50%, -50%)'
    }
    createFormIsOpen = !createFormIsOpen
}
signbutton.addEventListener('click', toggleForm)
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
