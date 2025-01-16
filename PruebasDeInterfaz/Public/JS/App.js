const checkboxes = document.querySelectorAll('.container__checkbox input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Desmarcar todos los checkboxes excepto el actual
        checkboxes.forEach(cb => {
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
