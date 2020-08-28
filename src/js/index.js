import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const addButton = document.querySelector(".button__add--js");
const removeButton = document.querySelector(".button__remove--js");
const glassQuantity = document.querySelector(".glass__quantity--js");
const historyTable = document.querySelector(".history__table--js");
const refreshButton = document.querySelector(".history__refresh--js");

let glassCounter;
let today;

addButton.addEventListener("click", addGlass);
removeButton.addEventListener("click", removeGlass);
refreshButton.addEventListener("click", tableInjector);

function dateCheck() {
  today = new Date();

  let day = today.getDate();
  if (day < 10) {
      day = '0' + day;
  }

  let month = today.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }

  today = `${day}-${month}-${today.getFullYear()}`;
  console.log(today);
  if (localStorage.getItem(today) == null) {
    localStorage.setItem(today, 0);
  }
  glassCounter = parseFloat(localStorage.getItem(today));
  glassQuantity.innerHTML = glassCounter;
}
dateCheck();

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

function tableInjector() {
  let historyData = {};
  let keys = Object.keys(localStorage);
  let i = keys.length;
  let tableData = '<tr><th>Data</th><th>Ilość</th></tr>';

  while (i--) {
    historyData[keys[i]] = localStorage.getItem(keys[i]);
  }

  for (const i in historyData) {
    if (!isNaN(parseFloat(historyData[i]))) {
      tableData += `<tr><td>${i}</td><td>${historyData[i]}</td></tr>`;
    }
  }
  historyTable.innerHTML = tableData;
}
tableInjector();
