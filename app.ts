
//Operador Type, tiene un uso similar a interface





//podemos definir los eventos del DOM asi como una funcion para luego pasarlo como 
//parametro asi
let change=(e: Event) =>{
   console.log(e)

}
let click=(e: Event) =>{
   console.log("click Event") 
}


const layout = document.querySelector('#entrada')!   //operador de asercion nula, esta expresion no va a ser nula


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





