const btn2 = document.getElementById('btn2');

btn2.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - btn2.clientWidth;
    const maxY = window.innerHeight - btn2.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    btn2.style.position = 'absolute';
    btn2.style.left = `${newX}px`;
    btn2.style.top = `${newY}px`;
});
