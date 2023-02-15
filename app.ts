
//diferentes formas de declarar funciones en typescript y javascript

let sumarCalc = (a: number, b:number) =>{
   return a+b
}

//para este caso podemos poner un number
let restarCalc = (a: number,b:number): number =>{
    return a-b
}

function multiplicarCalc(a:number,b:number):number {
   return a*b
}



console.log(sumarCalc(5,5))
console.log(restarCalc(5,2))
console.log(multiplicarCalc(5,5))

//vamos a utilizar el operador type para definir funciones type pero tambien sirve para definir
//tipos definidos por el usuario que se van a utilizar en clases y otras estructuras


//Firma de funciones
//definimos la firma de una funcion la instruccion type
type operador = (a:number,b:number) => number



//Y podemos implementar las funciones asi tambien

let sumar: operador=(a,b)=>{
    return a+b
}

let restar: operador = (a,b) =>{
    return a-b
}

let multiplicar: operador = (a,b) =>{
    return a*b
}

console.log(sumar(5,5))
console.log(restar(5,2))
console.log(multiplicar(5,5))






//podemos definir los eventos del DOM asi como una funcion para luego pasarlo como 
//parametro asi
let change=(e: Event) =>{
   console.log(e)

}
let click=(e: Event) =>{
   console.log("click Event") 
}


const layout = document.querySelector('#entrada')!   //operador de asercion nula, esta expresion no va a ser nula

layout.innerHTML=""

let input = document.querySelector('#txtnumero') as HTMLInputElement



input.onchange= (e: Event) =>{
     
     //entrada.valorTexto = input.value
     //console.log(entrada)

}
input.addEventListener('change',change)


input.addEventListener('keydown' , (e: KeyboardEvent) =>{
    //console.dir(e.target)
    //entrada.tecla=e.key 
    //entrada={...entrada,codigoTecla:e.keyCode}
    //console.log(e.key)
    //console.log(entrada)

})


//console.log("layout")
//console.log(layout.children)

const botones = document.querySelector('#numeros') as HTMLDivElement  //typeCasting

let numeros: number[] =[1,2,3,4,5,6,7,8,9,0]


//No es necesario poner Function
const boton: Function = (num) =>`<div id="btn7"><span>${num}<span></div>`

numeros.forEach(e =>{
    botones.innerHTML += boton(e)
})


botones.childNodes.forEach((e) =>{
    console.dir(e)
    e.addEventListener('click',click)
    
})





