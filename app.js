var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("**log de pruebas tipado dinamino-Any**");
//podemos declarar objetos de forma dinamica que admitan cualquier tipo
var salidaTexto = '';
var entradaTexto = {
    valorTexto: '',
    tecla: '',
    codigoTecla: 0
};
//Podemos declarar las propiedades explicitamente con sus tipos
var entrada;
//y luego podemos definirlo asi
entrada = { valorTexto: undefined, tecla: 444, codigoTecla: 0 };
//podemos modificar las propiedades de esta manera
//la tradicional
entrada.valorTexto = null;
//utilizando la sintaxis expread
entrada = __assign(__assign({}, entrada), { tecla: 's' });
console.log(entrada);
var cajaText = document.querySelector('pre');
salidaTexto = "entrada=" + JSON.stringify(entrada, null, 2);
cajaText.innerHTML = salidaTexto;
var layout = document.querySelector('#entrada'); //operador de asercion nula, esta expresion no va a ser nula
var input = document.querySelector('#txtnumero');
//input.value="555555"
input.onchange = function (e) {
    entrada.valorTexto = input.value;
    console.log(entrada);
};
input.addEventListener('change', function (e) {
    //Tambien podemos definir el evento asi
});
input.addEventListener('keydown', function (e) {
    //console.dir(e.target)
    entrada.tecla = e.key;
    entrada = __assign(__assign({}, entrada), { codigoTecla: e.keyCode });
    //console.log(e.key)
    console.log(entrada);
});
//console.log("layout")
//console.log(layout.children)
var botones = document.querySelector('#numeros'); //typeCasting
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//tambien se puede haber hecho de esta menra
//podemos añadir a numeros mas elementos de esta manera
numeros.push(11);
numeros.push(12);
numeros.concat([12]); //otra manera
numeros = __spreadArray(__spreadArray([], numeros, true), [13], false); //otra manera  operador spread
console.log(numeros);
console.dir(botones.childNodes);
//No es necesario poner Function
var boton = function (num) { return "<div id=\"btn7\"><span>".concat(num, "<span></div>"); };
numeros.forEach(function (e) {
    botones.innerHTML += boton(e);
});
/*
botones.childNodes.forEach((e) =>{
    console.dir(e)
    e.addEventListener('click',(e: Event) =>{
        console.log("click event")
    })
})
*/
