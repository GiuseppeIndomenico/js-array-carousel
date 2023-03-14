
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/0.3webp',
    'img/04.webp',
    'img/05.webp',


];

//console.log(images);

const slider = document.querySelector('.gi-container');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
//console.log(slider);

let currentIndex = 0;
let slides = ''

for (let i=0; i < images.length; i++){

slides+=   `
<div class="slide">
   <img src="${images[i]}" alt="videogame ${i}">
</div>
`;

}
//console.log(slides)

slider.innerHTML+=slides

document.querySelectorAll('.slide')[0].classList.add('active')

