let Titulo = document.getElementById('Tit-Eva01');
console.log(Titulo);

let Imagen_Eva01 = document.querySelectorAll('.Eva01');
console.log(Imagen_Eva01);

const Eva01_1 = Imagen_Eva01[0];
const Eva01_2 = Imagen_Eva01[1];

/* Eva01_2.setAttribute("src", "Imagenes/eva-01-2160-x-1338-wallpaper-lvbk19qyjdfnd52c.jpg") */

const imagenes = [
    "Imagenes/eva-01-2160-x-1338-wallpaper-lvbk19qyjdfnd52c.jpg",
    "Imagenes/Eva01 a.jpg",
    "Imagenes/Eva01 b.jpg"  

];

let contador = 0;


const boton_cambio = document.getElementById('boton-cambio');
console.log(boton_cambio);

boton_cambio.addEventListener("click", function(){
    Eva01_2.setAttribute("src", "Imagenes/eva-01-2160-x-1338-wallpaper-lvbk19qyjdfnd52c.jpg");
/*     Eva01_2.querySelector("img").setAttribute("scr", imagenes[contador]);
    contador ++;

    if (contador >= imagenes.length){
        contador = 0;
    } */
});

const boton = document.getElementById('boton');

boton.addEventListener('click', () =>{
    boton.textContent = 'Haz dado un click';
});

const boton2 = document.getElementById('boton2');

boton2.addEventListener('click', () =>{
    alert('Acabas de activar el método de auto destrucción.')
});

const boton3 = document.getElementById('boton3');

boton3.addEventListener('click', ()=> {
    boton3.style.backgroundColor = 'lightblue';
    boton3.style.color = 'black';
});

const boton4 = document.getElementById('boton4');

boton4.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'black';
});

const boton5 = document.getElementById('boton5');
const div4 = document.getElementById('div4');

boton5.addEventListener('click', () =>{

        const parrafo = document.createElement ('p');
        parrafo.textContent = 'Contenido dinamico';

        parrafo.style.fontFamily = 'Franklin Gothic Medium', 'Arial Narrow', 'Arial, sans-serif';
        parrafo.style.fontSize = '50px';
        parrafo.style.color = 'greenyellow';
        parrafo.style.border = 'solid, black';
        parrafo.style.backgroundColor = 'purple';
        parrafo.style.width = '30%';
        parrafo.style.margin = 'auto';
        parrafo.style.cursor = 'pointer';

        div4.appendChild(parrafo);
});

const boton6 = document.getElementById('boton6');
const div5 = document.getElementById('div5');

boton6.addEventListener('click', ()=>{
    
    const parrafo2 = document.createElement('p');
    parrafo2.textContent = 'Parrafo Dinamico';

    parrafo2.classList.add('Estilos_dinamicos');
    div5.appendChild(parrafo2);

    setTimeout(() =>{
        parrafo2.classList.toggle('Estilos_dinamico');
    }, 3000);
});