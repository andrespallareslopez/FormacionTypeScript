



console.log("**log de pruebas compilando typescript**")    

let mensaje="prueba typescript con tipado debil o inferencia implicita"   //tipo cadena que lo esta infiriendo implicitamente

let mensaje1: string ="prueba typescript con tipado fuerte"

//vamos a poner que pueda ser un numero y un string 
let valor: string | number = 12000   //union types



mensaje="hola"    //si intentamos poner un numero le ponemos numero nos va a dar error


console.log(mensaje)
console.log(mensaje1)

const layout = document.querySelector('#entrada')!   //operador de asercion nula, esta expresion no va a ser nula

console.log("layout")
console.log(layout.children)




