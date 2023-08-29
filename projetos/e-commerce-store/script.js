function changeKitImg() {
    const img = document.getElementById('img#kit-espiral');
    const currentSrc = img.src;
   
    if (currentSrc.includes('imgs/product-3.jpg')) {
        img.src = currentSrc.replace('imgs/product-3.jpg', 'imgs/product-1.jpg');
    } else {
        img.src = currentSrc.replace('imgs/product-1.jpg', 'imgs/product-3.jpg');
    }
}
