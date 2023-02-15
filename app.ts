//Arrancar con tsc app.ts





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

//podemos definir un ambio public,private,protected readonly a las clases si creamos un nueva clase

class Articulo {
   public Id:number
   public Descripcion: string
   public Precio:number
   private fecha:Date

   public constructor(i:number,d:string,p:number,f:Date){
      this.Id=i
      this.Descripcion=d
      this.Precio=p
      this.fecha=f
   }
  
   public getFecha():Date {
       return this.fecha
   }
}

let mercancia = new Articulo(1,'chocolate',3.00,new Date)

console.log(mercancia.getFecha())


//Typescript tiene tambien  getter and setter

class Genero{
    private _id:number
    private _descripcion:string
    private _precio:number

    public get Id(){
      return this._id
    }

    public set Id(i:number){
      this._id=i
    }
    
    public get Descripcion(){
      return this._descripcion
    }
    public set Descripcion(d:string){
       this._descripcion=d
    }
     
    public get Precio(){
       return this._precio
    }
    public set Precio(p:number){
      this._precio = p
    }    
    
    
     
}


//Tambien tenemos herencia un ejemplo

class Persona {
    nombre:string
    apellidos:string
    age:number
    constructor(n:string,a:string,age:number){
      this.nombre=n
      this.apellidos=a

      this.age=age
    }

}

class empleado extends Persona{
   NumEmpleado:number
   
   constructor(n:string,a:string,age:number,ne:number){
      super(n,a,age)
      this.NumEmpleado=ne
      
   }
}

let emp=new empleado('andres','pallares',52,1554443)

console.log(emp.nombre,emp.NumEmpleado)


