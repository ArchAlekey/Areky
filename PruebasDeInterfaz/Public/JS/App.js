const checkboxes__busqueda = document.querySelectorAll('.container__checkbox_busqueda input[type="checkbox"]');

checkboxes__busqueda.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Desmarcar todos los checkboxes excepto el actual
        checkboxes__busqueda.forEach(cb => {
            if (cb !== checkbox) cb.checked = false;
        });

        // Ocultar todas las tablas
        document.querySelectorAll('.container__inputs_styls').forEach(campo => {
            campo.style.display = 'none';
        });

        // Mostrar la tabla correspondiente al checkbox marcado
        if (checkbox.checked) {
            const campo = document.getElementById(checkbox.value);
            campo.style.display = 'block';
        }
    });
});

const btn__mostrar_tbls = document.querySelector('.btn__mostrar_tbls');
const mostrar_tbls = document.querySelector('.container__post_click');

btn__mostrar_tbls.addEventListener('click', ()=>{
        mostrar_tbls.classList.toggle("show__container");
})

const checkboxes__tablas = document.querySelectorAll('.container__checkbox_tablas input[type="checkbox"]');

checkboxes__tablas.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Desmarcar todos los checkboxes excepto el actual
        checkboxes__tablas.forEach(cb => {
            if (cb !== checkbox) cb.checked = false;
        });

        // Ocultar todas las tablas
        document.querySelectorAll('.container__tbl_styls').forEach(tabla => {
            tabla.style.display = 'none';
        });

        // Mostrar la tabla correspondiente al checkbox marcado
        if (checkbox.checked) {
            const tabla = document.getElementById(checkbox.value);
            tabla.parentElement.style.display = 'block';
        }
    });
});