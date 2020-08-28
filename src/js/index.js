import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const addButton = document.querySelector('.button__add--js');
const removeButton = document.querySelector('.button__remove--js');
const glassQuantity = document.querySelector('.glass__quantity--js');

let glassCounter;
let today;

function dateCheck (){
    today = new Date();
    today = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`
    console.log(today);
    if (localStorage.getItem(today) == null) {
        localStorage.setItem(today, 0);
    }
    glassCounter = parseFloat(localStorage.getItem(today));
    glassQuantity.innerHTML = glassCounter;
}

dateCheck()

addButton.addEventListener('click', addGlass);
removeButton.addEventListener('click', removeGlass);

function addGlass() {
    dateCheck();
    glassCounter++;
    localStorage.setItem(today, glassCounter);
    glassQuantity.innerHTML = glassCounter;
}

function removeGlass() {
    dateCheck();
    if (glassCounter > 0) {
        glassCounter--;
        localStorage.setItem(today, glassCounter);
        glassQuantity.innerHTML = glassCounter;
    }
}