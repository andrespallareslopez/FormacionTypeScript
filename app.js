


//************************* */
//Arrancar con tsc app.ts -w
/**************************** */





console.log("**log de pruebas typecasting con typescript**");
var mensaje = "prueba javascript";
console.log(mensaje);
//sabe que es un HTMLPreElement porque se lo estamos diciendo en
//query selector y lo infiere implicitamente y le pongo el operador de asercion
//nula, porque no sabe si de inicio va a decolver algo
var output = document.querySelector("pre");
output.innerHTML = mensaje;
//if (output) output.innerHTML=mensaje
