
//Operador Type, tiene un uso similar a interface

type entrada ={
    mensaje:string,
    tecla:string,
    codigoTecla:number

}

let inputValue: entrada = {mensaje:'',tecla:'',codigoTecla:0}

//************************* */
type mensajeError = string | undefined

let logger = function (errorText?: string | undefined ){
    return errorText || "no disponible"
}


console.log(logger())
console.log(logger("error"))
console.log(logger(undefined))


//******************************************** */
let circulo=(r:number): number =>{
    return (3.14)*Math.pow(r,2)
}

console.log(circulo(2))

let cuadrado= (l:number):number =>{
    return l*l
}

console.log(cuadrado(2))


//el operador type se puede complicar bastante y dar
//muchas opciones

//Compilando mas el type con typeof
type calculoArea = typeof cuadrado | typeof circulo

let calcularArea =(fn: calculoArea) =>{
    return (l:number):number => fn(l)
}



console.log(calcularArea(circulo)(2))
console.log(calcularArea(cuadrado)(2))

let circ = calcularArea(circulo)
console.log(circ(2))

let cuadr = calcularArea(cuadrado)
console.log(cuadr(2))


/*
let logger = function (errorText?: string | undefined ){
     return errorText || "no disponible"
}
*/


