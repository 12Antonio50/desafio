const palabra = document.getElementById('palabra');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    palabra.style.left = x + 'px';
    palabra.style.top = y + 'px';
});
const container = document.getElementById('container');
const words = ['Te amo', '¿Me perdonas?', 'Vuelve', 'Regresa', 'Please'];

function randomPosition() {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    return { x: randomX, y: randomY };
}

function createWordElement(word) {
    const newWord = document.createElement('div');
    newWord.className = 'word';
    newWord.textContent = word;
    container.appendChild(newWord);
    return newWord;
}

function animateWords() {
    words.forEach(word => {
        const wordElement = createWordElement(word);
        const position = randomPosition();
        wordElement.style.left = position.x + 'px';
        wordElement.style.top = position.y + 'px';
    });
}

animateWords();

container.addEventListener('animationiteration', () => {
    
    container.innerHTML = '';
    animateWords(); 
});
