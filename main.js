const palabra = document.getElementById('palabra');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    palabra.style.left = x + 'px';
    palabra.style.top = y + 'px';
});