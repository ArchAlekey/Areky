/* const checkboxes__busqueda = document.querySelectorAll('.container__checkbox_busqueda input[type="checkbox"]');

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
}); */

const checkboxesBusqueda = document.querySelectorAll('.container__checkbox_busqueda input[type="checkbox"]');
const inputsBusqueda = document.querySelectorAll('.container__inputs input[type="text"]');
const btnMostrarTbls = document.querySelector('.btn__mostrar_tbls');
const mostrarTbls = document.querySelector('.container__post_click');
const checkboxesTablas = document.querySelectorAll('.container__checkbox_tablas input[type="checkbox"]');
let busquedaRealizada = false; // Para controlar el estado de la búsqueda

// Manejo de los checkboxes de búsqueda
checkboxesBusqueda.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Desmarcar todos los checkboxes excepto el actual
        checkboxesBusqueda.forEach(cb => {
            if (cb !== checkbox) cb.checked = false;
        });

        // Ocultar todos los campos de búsqueda
        document.querySelectorAll('.container__inputs_styls').forEach(campo => {
            campo.style.display = 'none';
        });

        // Mostrar los campos correspondientes al checkbox marcado
        if (checkbox.checked) {
            const campo = document.getElementById(checkbox.value);
            campo.style.display = 'block';
            habilitarBotonBuscar(); // Habilitar el botón si hay un checkbox seleccionado
        } else {
            deshabilitarBotonBuscar(); // Deshabilitar si no hay selección
        }
    });
});

// Habilitar el botón de búsqueda solo si hay cambios en los inputs
inputsBusqueda.forEach(input => {
    input.addEventListener('input', () => {
        habilitarBotonBuscar();
        busquedaRealizada = false; // Permitir una nueva búsqueda
    });
});

// Acción al presionar el botón de búsqueda
btnMostrarTbls.addEventListener('click', () => {
    if (!busquedaRealizada) {
        mostrarTbls.classList.add('show__container');
        busquedaRealizada = true; // Bloquear el botón hasta que haya nuevos cambios
        deshabilitarBotonBuscar(); // Deshabilitar después de presionar
    }
});

// Manejo de los checkboxes de tablas
checkboxesTablas.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Desmarcar todos los checkboxes excepto el actual
        checkboxesTablas.forEach(cb => {
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

// Funciones auxiliares
function habilitarBotonBuscar() {
    btnMostrarTbls.disabled = false; // Habilitar el botón
    btnMostrarTbls.classList.add('active'); // Añadir clase para estilos, si es necesario
}

function deshabilitarBotonBuscar() {
    btnMostrarTbls.disabled = true; // Deshabilitar el botón
    btnMostrarTbls.classList.remove('active'); // Quitar clase de estilos
}

// Deshabilitar inicialmente el botón de búsqueda
deshabilitarBotonBuscar();
