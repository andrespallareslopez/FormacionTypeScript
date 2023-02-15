
//crear clases

class Producto {
   Nombre:string
   cnt: number
   Precio: number
   Total: number
   
   constructor(n: string,c:number,p:number){
     this.Nombre=n
     this.cnt=c
     this.Precio=p
     this.Total=(c*p)  //Cnt*Precio
   }
   
   toString(){
     return JSON.stringify(this,null,2)
   }
   log(){
    console.log(`Nombre: ${this.Nombre} cnt:${this.cnt} Precio:${this.Precio} Total:${this.Total}`)
   }
   
}

const Producto1=new Producto('coca cola',1,2.00)

const Producto2=new Producto('Cafe',1,0.80)

//IIFE: Expresión de función ejecutada inmediatamente o un patron de diseño llamado funcion autoejecutable
//Tambien sirve para crear instancias de clases y tambien clases
//Podemos quitar el tipo producto
const producto3: Producto=(function(nombre,cnt,precio){
    let total=cnt*precio   
      
    return {Nombre:nombre,
            cnt,
            Precio:precio,
            Total:total,
            toString:function(){
              return JSON.stringify(this,null,2)
            },
            log:function(){
              console.log(`Nombre: ${this.Nombre} cnt:${this.cnt} Precio:${this.Precio} Total:${this.Total}`)
            }
          }   
  }    
  )('Flan',1,2.50)

let Productos: Producto[] =[]

Productos.push(Producto1)
Productos.push(Producto2)
Productos.push(producto3)


//para Añadir de esta manera, creando un objeto literal y haciendo typecasting tenemos que hacer typeCasting
Productos.push({Nombre:'Fanta',cnt:1,Precio:1.00,Total:2.00} as Producto)


//Actualmente este seria la mejor opcion para añadir al array utilizando el operador spread '...Productos'
Productos=[...Productos,{Nombre:'Tostada',cnt:1,Precio:1.00,Total:2.00} as Producto]  

//podemos desestructurar un objeto

const {Nombre,cnt,Precio,Total} = Producto1

console.log(Nombre,cnt,Precio,Total)

//tambien podriamos haber hecho de la manera tracicional

const Nombre1=Producto2.Nombre
const cnt1= Producto2.cnt
const Precio1=Producto2.Precio


//Ejemplo de desestructuracion de objeto a variables
function setInsertSqlProducto (p:Producto):string {
   const {Nombre,cnt,Precio,Total} = p

   //le pasamos la cadena sql a un motor o libreria de base de datos, el tipico insert o update o delete

   return `insert into tabla (Nombre,Cantidad,Precio,Total) values ('${Nombre}',${cnt},${Precio},${Total})`
   
}



const output = document.querySelector('pre') as HTMLPreElement  

//output.innerHTML=Producto1.toString()
//output.innerHTML = producto3.toString()


output.innerHTML= JSON.stringify(Productos,null,2)




