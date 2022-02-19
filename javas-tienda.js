const btnDepartamentos = document.getElementById('btn-departamentos'),
    grid = document.getElementById('grid');
    esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
        if(esDispositivoMovil()){
        grid.classList.add('activo');
    }
});