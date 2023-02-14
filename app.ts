

console.log("**log de pruebas typecasting con typescript**")    

const mensaje="prueba javascript"


const layout = document.querySelector('#entrada')!   //operador de asercion nula, esta expresion no va a ser nula

console.log("layout")
console.log(layout.children)

const botones = document.querySelector('#numeros') as HTMLDivElement

console.dir(botones.childNodes)

botones.childNodes.forEach((e) =>{
    console.dir(e)
    e.addEventListener('click',(e: Event) =>{
        console.log("click event")
    })
})


