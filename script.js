/*document.querySelector( "body > header > nav > img" ).onclick = e => {
    e.target.parentNode.classList.toggle( "opened" );
    } */

const hero_slide = document.querySelector('.hero_slide');
const hero_images = document.querySelectorAll('.hero_slide img');

// boutons
const prev_button = document.querySelector('#prev_button');
const next_button = document.querySelector('#next_button');

// conteur
let counter = 1;
const size = hero_images[0].clientWidth;

hero_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners

next_button.addEventListener('click', () => {
    if (counter >= hero_images.length -1) return;
    hero_slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    hero_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prev_button.addEventListener('click', () => {
    if (counter <=0) return;
    hero_slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    hero_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

hero_slide.addEventListener('transitionend', () => {
    if(hero_images[counter].id === 'last_clone') {
        hero_slide.style.transition = 'none';
        counter = 3;
        hero_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(hero_images[counter].id === 'first_clone') {
        hero_slide.style.transition = 'none';
        counter = hero_images.length - counter;
        hero_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});