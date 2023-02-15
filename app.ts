

console.log("**log de pruebas con objetos y matrizes**")    

//podemos declarar un objeto de la siguiente manera, hace inferencia de tipos
//typeScript

let salidaTexto: string = ''




let entradaTexto = {
                    valorTexto:'',
                    tecla:'',
                    codigoTecla: 0 }


//Podemos declarar las propiedades explicitamente con sus tipos

let entrada : {
     valorTexto: string,
     tecla:string,
     codigoTecla:number
}

//y luego podemos definirlo asi
entrada={valorTexto:'',tecla:'',codigoTecla:0}


//podemos modificar las propiedades de esta manera
//la tradicional
entrada.valorTexto="andres"

//utilizando la sintaxis expread
entrada={...entrada,tecla:'s'}

console.log(entrada)

const cajaText= document.querySelector('pre') as HTMLPreElement

salidaTexto = "entrada=" +JSON.stringify(entrada,null,2)

cajaText.innerHTML = salidaTexto







const layout = document.querySelector('#entrada')!   //operador de asercion nula, esta expresion no va a ser nula


let input = document.querySelector('#txtnumero') as HTMLInputElement

//input.value="555555"

input.onchange= (e: Event) =>{
     
     entrada.valorTexto = input.value
     console.log(entrada)

}
input.addEventListener('change',(e:Event) =>{
    //Tambien podemos definir el evento asi
    
    
})

input.addEventListener('keydown' , (e: KeyboardEvent) =>{
    //console.dir(e.target)
    entrada.tecla=e.key 
    entrada={...entrada,codigoTecla:e.keyCode}
    //console.log(e.key)
    console.log(entrada)

})


//console.log("layout")
//console.log(layout.children)

const botones = document.querySelector('#numeros') as HTMLDivElement  //typeCasting

let numeros: number[] =[1,2,3,4,5,6,7,8,9,0]

//tambien se puede haber hecho de esta menra

//podemos añadir a numeros mas elementos de esta manera
numeros.push(11)
numeros.push(12)

numeros.concat([12])  //otra manera

numeros=[...numeros,13]  //otra manera  operador spread

//filtrar elementos de un array

numeros=numeros.filter(e => e % 2)

//Eliminar elementos de un array
numeros.splice(6,1)

//Otra forma de eliminar elementos
numeros=numeros.filter(e => e!=11)
//podemos generar una funcion como la siguiente

//como un metodo de extension de array pero tenemos que definir
//una interfaz con genericidad

interface Array<T> {
    remove(e:T): Array<T>
}

Array.prototype.remove = function(e: any) {
   return this.splice(this.indexOf(e), 1);
}

numeros.remove(7)


//utilizando el operador spread en es6
const eliminar = function(arr,item){
    var index = arr.indexOf(item);
    return [
        //con la sintaxis expread 
        // parte de la array antes del elemento dado
        ...arr.slice(0, index),
 
        // parte de la array después del elemento dado
        ...arr.slice(index + 1)
    ];
}

numeros=eliminar(numeros,9)




console.log(numeros)

console.dir(botones.childNodes)


//No es necesario poner Function
const boton: Function = (num) =>`<div id="btn7"><span>${num}<span></div>`

numeros.forEach(e =>{
    botones.innerHTML += boton(e)
})

/*
botones.childNodes.forEach((e) =>{
    console.dir(e)
    e.addEventListener('click',(e: Event) =>{
        console.log("click event")
    })
})
*/




