



console.log("**log de pruebas compilando typescript**")    

let mensaje="prueba typescript con tipado debil o inferencia implicita"   //tipo cadena que lo esta infiriendo implicitamente

let mensaje1: string = "pruebas typescript con tipado fuerte"

let cantidad: number = 1000

let numeros: number[] = [1,2,3,4,5,6]

mensaje="hola"    //si intentamos poner un numero le ponemos numero nos va a dar error


console.log(mensaje)
console.log(cantidad)
console.log(numeros)

numeros.forEach((e) => {
    console.log(e)
})



