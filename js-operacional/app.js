document.addEventListener("DOMContentLoaded", function(){
    // esta es zona segura
    //console.log(document.getElementById("txtNombre").value);
    //console.log(document.getElementById("txtApellido").value);
});

// añadiendo evento clic al botón mostrar
const btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function() {
    //console.log('haciendo click');
    //alert("hice clic");
    //recuperando info del formulario
    const nombres = document.getElementById("txtNombre").value;
    const apellido = document.getElementById("txtApellido").value;
    const cedula = document.getElementById("txtCedula").value;
    console.log('nombres ' +nombres+ ', apellidos ' +apellido+ ', cedula ' + cedula);
});
