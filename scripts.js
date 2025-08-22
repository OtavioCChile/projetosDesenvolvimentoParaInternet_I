    const img = document.getElementById('minhaImagem');


const limite = {
    xMin: 50, 
    xMax: window.innerWidth - img.offsetWidth - 50, 
    yMin: 400,
    yMax: window.innerHeight - img.offsetHeight - 100
};


let posX = limite.xMax;
let posY = limite.yMax;

img.style.left = posX + 'px';
img.style.top = posY + 'px';

const step = 10;

function moverImagem(e) {
    switch(e.key) {
        case 'ArrowUp':
            posY = Math.max(limite.yMin, posY - step);
            break;
        case 'ArrowDown':
            posY = Math.min(limite.yMax, posY + step);
            break;
        case 'ArrowLeft':
            posX = Math.max(limite.xMin, posX - step);
            break;
        case 'ArrowRight':
            posX = Math.min(limite.xMax, posX + step);
            break;
    }
    img.style.left = posX + 'px';
    img.style.top = posY + 'px';
}

window.addEventListener('keydown', moverImagem);

window.addEventListener('resize', () => {
    limite.xMax = window.innerWidth - img.offsetWidth - 100;
    limite.yMax = window.innerHeight - img.offsetHeight - 100;

    posX = Math.min(posX, limite.xMax);
    posY = Math.min(posY, limite.yMax);

    img.style.left = posX + 'px';
    img.style.top = posY + 'px';
});