var cont = 0;
$(document).ready(function () {


    $("#enviar").click(function () {

        cont++;
        var escuela = document.getElementById("school").value;
        var nombre = document.getElementById("apynom").value;
        var correo = document.getElementById("corr").value;
        var telefono = document.getElementById("telf").value;
        var fila = document.createElement("tr");
        var num = document.createElement("td");
        var esc = document.createElement("td");
        var apno = document.createElement("td");
        var email = document.createElement("td");
        var cell = document.createElement("td");
        var opera = document.createElement("td");
        num.innerHTML = cont;
        esc.innerHTML = escuela;
        apno.innerHTML = nombre;
        email.innerHTML = correo;
        cell.innerHTML = telefono;
        opera.innerHTML = "<a href='#' class='text-warning ml-5 ' onclick='editar(this)'> <i class='fa-solid fa-square-pen'></i> </a>" + "<a href='#' class='text-danger ml-4' onclick='eliminar(this)'><i class='fa-solid fa-eraser'></i></a>";
        
        if (escuela == "0"){
            alert("Seleccione una escuela")
            return;
        } else if(nombre == ""){
            alert("Por favor rellanar los Apellidos y Nombres");
            return;
        } else if (correo == "") {
            alert("Por favor rellanar correo");
            return;
        } else if (telefono == ""){
            alert("Por favor rellanar teléfono");
            return;
        }
        $("#tabla").append(fila)
        $(fila).append(num, esc, apno, email, cell, opera);
        limpiar();

    });
});
function eliminar(row) {
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}
function limpiar() {;
    escuela.value = "0";
    nombre.value = "";
    correo.value = "a";
    telefono.value = "a";
}


