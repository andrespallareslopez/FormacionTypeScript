console.log("**log de pruebas compilando typescript**");
var mensaje = "prueba typescript con tipado debil o inferencia implicita"; //tipo cadena que lo esta infiriendo implicitamente
var mensaje1 = "pruebas typescript con tipado fuerte";
var cantidad = 1000;
var numeros = [1, 2, 3, 4, 5, 6];
mensaje = "hola"; //si intentamos poner un numero le ponemos numero nos va a dar error
console.log(mensaje);
console.log(cantidad);
console.log(numeros);
numeros.forEach(function (e) {
    console.log(e);
});
