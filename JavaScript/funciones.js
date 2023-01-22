//Función para hacer visible la fecha de cumpleaños
document.getElementById('boton_cumpleaños').addEventListener('click', function () {

    document.getElementById("cumpleaños").style.visibility = "visible";

});

//Función para hacer visible el apartado de los pasatiempos
document.getElementById('boton_mostrar_pasatiempos').addEventListener('click', function () {

    document.getElementById("fila_pasatiempos").style.visibility = "visible";

});

//Función para cambiar el color de la letra del apartado superior a color blanco
document.getElementById('boton_color_letra').addEventListener('click', function () {

    document.getElementById("fila_datos").style.color = "#ffffff";

});

//Función para cambiar el color del apartado superior a rojo y del apartado inferior a naranja
document.getElementById('boton_rojo').addEventListener('click', function () {

    document.getElementById("fila_datos").style.backgroundColor = " #dc3838";
    document.getElementById("contenedor").style.backgroundColor = " #fad3b3";
    document.getElementById("html").style.backgroundColor = " #fad3b3";

});

//Función para cambiar el color del apartado superior a violeta y del apartado inferior a blanco
document.getElementById('boton_violeta').addEventListener('click', function () {

    document.getElementById("fila_datos").style.backgroundColor = " #df6eee";
    document.getElementById("contenedor").style.backgroundColor = " #ffffff";
    document.getElementById("html").style.backgroundColor = " #ffffff";

});

//Función para cambiar el color del apartado superior a celeste y del apartado inferior a gris
document.getElementById('boton_celeste').addEventListener('click', function () {

    document.getElementById("fila_datos").style.backgroundColor = " #9eeaff";
    document.getElementById("contenedor").style.backgroundColor = " #e4e4e4";
    document.getElementById("html").style.backgroundColor = " #e4e4e4";

});
