//Operador Type, tiene un uso similar a interface
//podemos definir los eventos del DOM asi como una funcion para luego pasarlo como 
//parametro asi
var change = function (e) {
    console.log(e);
};
var click = function (e) {
    console.log("click Event");
};
var layout = document.querySelector('#entrada'); //operador de asercion nula, esta expresion no va a ser nula
var input = document.querySelector('#txtnumero');
input.onchange = function (e) {
    //entrada.valorTexto = input.value
    //console.log(entrada)
};
input.addEventListener('change', change);
input.addEventListener('keydown', function (e) {
    //console.dir(e.target)
    //entrada.tecla=e.key 
    //entrada={...entrada,codigoTecla:e.keyCode}
    //console.log(e.key)
    //console.log(entrada)
});
//console.log("layout")
//console.log(layout.children)
var botones = document.querySelector('#numeros'); //typeCasting
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//No es necesario poner Function
var boton = function (num) { return "<div id=\"btn7\"><span>".concat(num, "<span></div>"); };
numeros.forEach(function (e) {
    botones.innerHTML += boton(e);
});
botones.childNodes.forEach(function (e) {
    console.dir(e);
    e.addEventListener('click', click);
});
