console.log("**log de pruebas typecasting con typescript**");
var mensaje = "prueba javascript";
var layout = document.querySelector('#entrada'); //operador de asercion nula, esta expresion no va a ser nula
console.log("layout");
console.log(layout.children);
var botones = document.querySelector('#numeros');
console.dir(botones.childNodes);
botones.childNodes.forEach(function (e) {
    console.dir(e);
    e.addEventListener('click', function (e) {
        console.log("click event");
    });
});
