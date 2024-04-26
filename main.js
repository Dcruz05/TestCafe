let estudiantes = [];

const addEstudiante = document.getElementById('enviar');
addEstudiante.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const noCuenta = document.getElementById('noCuenta').value;
    const contraseña = document.getElementById('password').value;

    const estudiante = {
        nombre: nombre,
        noCuenta: noCuenta,
        contraseña: contraseña
    };
    estudiantes.push(estudiante);
    const respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = "";

    estudiantes.forEach(estudiante => {
        respuesta.innerHTML += `
            <p id="resultado">Nombre: ${estudiante.nombre}, No. de Cuenta: ${estudiante.noCuenta} Contraseña: ${estudiante.contraseña}</p>
            <hr> <!-- Separador entre estudiantes -->
        `;
    });

});

