//Operador Type, tiene un uso similar a interface
var inputValue = { mensaje: '', tecla: '', codigoTecla: 0 };
var logger = function (errorText) {
    return errorText || "no disponible";
};
console.log(logger());
console.log(logger("error"));
console.log(logger(undefined));
//******************************************** */
var circulo = function (r) {
    return (3.14) * Math.pow(r, 2);
};
console.log(circulo(2));
var cuadrado = function (l) {
    return l * l;
};
console.log(cuadrado(2));
var calcularArea = function (fn) {
    return function (l) { return fn(l); };
};
console.log(calcularArea(circulo)(2));
console.log(calcularArea(cuadrado)(2));
var circ = calcularArea(circulo);
console.log(circ(2));
var cuadr = calcularArea(cuadrado);
console.log(cuadr(2));
/*
let logger = function (errorText?: string | undefined ){
     return errorText || "no disponible"
}
*/
