var cont = 1;
$(document).ready(function () {


    $("#enviar").click(function () {

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

        if (escuela == "0") {
            alert("Seleccione una escuela")
            return;
        } else if (nombre == "") {
            alert("Por favor rellenar los Apellidos y Nombres");
            return;
        } else if (correo == "") {
            alert("Por favor rellenar correo");
            return;
        } else if (telefono == "") {
            alert("Por favor rellenar teléfono");
            return;
        }
        cont++;
        $("#tabla").append(fila);
        $(fila).append(num, esc, apno, email, cell, opera);

        limpiar();
        
    });
});


function eliminar(row) {
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
    cont--;
}
function limpiar() {
    document.getElementById("school").value = "0";
    document.getElementById("apynom").value = "";
    document.getElementById("corr").value = "";
    document.getElementById("telf").value = "";
}
function editar() {
    var a = document.createElement("option");
    var b = document.createElement("h6");
    var c = document.createElement("option");
    var d = document.createElement("textarea");
    a.innerHTML = esc;
    b.innerHTML = apno;
    c.innerHTML = email;
    d.innerHTML = cell;
    document.getElementById("school").value = a;
    document.getElementById("apynom").value = b;
    document.getElementById("corr").value = c;
    document.getElementById("telf").value = d;
}



