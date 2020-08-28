import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

// console.log('HELLO 🚀')

let glassCounter = 0;

const addButton = document.querySelector('.button__add--js');
const removeButton = document.querySelector('.button__remove--js');
const glassQuantity = document.querySelector('.glass__quantity--js')

addButton.addEventListener('click', addGlass);
removeButton.addEventListener('click', removeGlass);

function addGlass() {
    glassCounter++;
    glassQuantity.innerHTML = glassCounter;
}

function removeGlass() {
    if (glassCounter > 0) {
        glassCounter--;
        glassQuantity.innerHTML = glassCounter;
    }
}