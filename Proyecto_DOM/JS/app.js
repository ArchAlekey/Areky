let Titulo = document.getElementById('Tit-Eva01');
console.log(Titulo);

let Imagen_Eva01 = document.querySelectorAll('.Eva01');
console.log(Imagen_Eva01);

const Eva01_1 = Imagen_Eva01[0];
const Eva01_2 = Imagen_Eva01[1];

/* Eva01_2.setAttribute("src", "Imagenes/eva-01-2160-x-1338-wallpaper-lvbk19qyjdfnd52c.jpg") */

const boton_cambio = document.getElementById('boton-cambio');
console.log(boton_cambio);

boton_cambio.addEventListener("click", function(){
    Eva01_2.setAttribute("src", "Imagenes/eva-01-2160-x-1338-wallpaper-lvbk19qyjdfnd52c.jpg");
});