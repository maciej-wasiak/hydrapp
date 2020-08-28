import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const addButton = document.querySelector('.button__add--js');
const removeButton = document.querySelector('.button__remove--js');
const glassQuantity = document.querySelector('.glass__quantity--js');

let glassCounter;

if (localStorage.getItem('glassCounter') == null) {
    localStorage.setItem('glassCounter', 0);
}
glassCounter = parseFloat(localStorage.getItem('glassCounter'));
glassQuantity.innerHTML = glassCounter;

addButton.addEventListener('click', addGlass);
removeButton.addEventListener('click', removeGlass);

function addGlass() {
    glassCounter++;
    localStorage.setItem('glassCounter', glassCounter);
    glassQuantity.innerHTML = glassCounter;
}

function removeGlass() {
    if (glassCounter > 0) {
        glassCounter--;
        localStorage.setItem('glassCounter', glassCounter);
        glassQuantity.innerHTML = glassCounter;
    }
}