
import { habilidades } from "../../data/data.js";

const btnIcon = document.querySelectorAll(".icon");
const displayDialog = document.querySelector('.dialog-dinamic');
const displayPerfil = document.querySelector('.nombre-perfil');
const ulPseudonimos = document.querySelector('.ul-pseudo');

const nombrePerfil = document.createElement("strong");
nombrePerfil.textContent = `${habilidades.info.datosP.nombre}`;
displayPerfil.appendChild(nombrePerfil);

 habilidades.info.datosP.pseudonimo.forEach((apodo)=>{
    const liApodos = document.createElement("li");
    liApodos.textContent = `${apodo}`;
    ulPseudonimos.appendChild(liApodos);

 });
 
btnIcon.forEach((boton, i) =>{
    boton.addEventListener("click", (event) => {
        displayDialog.showModal();
        if(i == 0){
            displayDialog.innerHTML = `
            <h1 class="title-info">Habilidades en ${habilidades.lengaujes.html.lengauje}</h1>
            <p class="title-info">Manejo del lenguaje: ${habilidades.lengaujes.html.nivel}</p>
            <ul>
                <li>${habilidades.lengaujes.html.habilidades.layout}</li>
                <li>${habilidades.lengaujes.html.habilidades.forms}</li>
                <li>${habilidades.lengaujes.html.habilidades.dialog}</li>
                <li>${habilidades.lengaujes.html.habilidades.table}</li>
            </ul>`;
        } else if (i == 1) {
            displayDialog.innerHTML = `
            <h1 class="title-info">Habilidades en ${habilidades.lengaujes.css.lengauje}</h1>
            <p class="title-info">Manejo del lenguaje: ${habilidades.lengaujes.css.nivel}</p>
            <ul>
                <li>${habilidades.lengaujes.css.habilidades.grid}</li>
                <li>${habilidades.lengaujes.css.habilidades.flex}</li>
            </ul>
            `;
        } else if (i == 2){
            displayDialog.innerHTML = `
            <h1 class="title-info">Habilidades en ${habilidades.lengaujes.javascript.lengauje}</h1>
            <p class="title-info">Manejo del lenguaje: ${habilidades.lengaujes.javascript.nivel}</p>
            <ul>
                <li>${habilidades.lengaujes.javascript.habilidades.dom}</li>
                <li>${habilidades.lengaujes.javascript.habilidades.event}</li>
                <li>${habilidades.lengaujes.javascript.habilidades.function}</li>
                <li>${habilidades.lengaujes.javascript.habilidades.object}</li>
            </ul>`;
        } else if (i == 3) {
            displayDialog.innerHTML = `
            <h1 class="title-info">Habilidades en ${habilidades.lengaujes.mysql.lengauje}</h1>
            <p class="title-info">Manejo del lenguaje: ${habilidades.lengaujes.mysql.nivel}</p>
            <ul>
                <li>${habilidades.lengaujes.mysql.habilidades.dbStruct}</li>
                <li>${habilidades.lengaujes.mysql.habilidades.dbSPD}</li>
                <li>${habilidades.lengaujes.mysql.habilidades.dbTransactional}</li>
            </ul>`;
        } else if(i == 4){
            displayDialog.innerHTML = `
            <h1 class="title-info">Habilidades en ${habilidades.herramientas.git.herramienta}</h1>
            <p class="title-info">Manejo del lenguaje: ${habilidades.herramientas.git.nivel}</p>
            <ul>
                <li>${habilidades.herramientas.git.habilidades.init}</li>
                <li>${habilidades.herramientas.git.habilidades.basic}</li>
                <li>${habilidades.herramientas.git.habilidades.branch}</li>
                <li>${habilidades.herramientas.git.habilidades.conflict}</li>
            </ul>`;
        } else if(i == 5){
            displayDialog.innerHTML = `
            <h1 class="title-info">Habilidades en ${habilidades.herramientas.github.herramienta}</h1>
            <p class="title-info">Manejo del lenguaje: ${habilidades.herramientas.git.nivel}</p>
            <ul>
                <li>${habilidades.herramientas.github.habilidades.repo}</li>
                <li>${habilidades.herramientas.github.habilidades.merge}</li>
            </ul>`;
        }

        const btnClose = document.createElement("button");
        btnClose.classList.add("btn");
        btnClose.textContent = "Cerrar";
        displayDialog.appendChild(btnClose);
        btnClose.addEventListener("click", function(){
            displayDialog.close();
        });
    });
});
