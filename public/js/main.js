import { habilidades } from "../../data/data.js";

const btnHtml = document.querySelector('#html');
const displayDialog = document.querySelector('.dialog-dinamic');
const btnClose = document.querySelector('.btn-close');

btnHtml.addEventListener("click", function(){
    displayDialog.showModal();
});

btnClose.addEventListener("click", function(){
    displayDialog.close();
});

console.log(habilidades);