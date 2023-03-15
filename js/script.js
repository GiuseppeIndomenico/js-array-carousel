
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',


];

console.log(images);

const slider = document.querySelector('.gi-container');

console.log(slider);

let currentIndex = 0;
let slides = '';

for (let i = 0; i < images.length; i++) {

    slides += `
<div class="slide">
   <img src="${images[i]}" alt="videogame ${i}">
</div>`;

}
//console.log(slides)

slider.innerHTML += slides

document.querySelectorAll('.slide')[currentIndex].classList.add('active');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', nextImg);

function nextImg() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');

}

prev.addEventListener('click', prevImg);

function prevImg() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');

}