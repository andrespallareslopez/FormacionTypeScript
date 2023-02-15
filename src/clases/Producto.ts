import { IFormatString } from "../interfaces/IFormatString"


export class Producto implements IFormatString {
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
    format(): string {
      return `Descripcion ${this.Nombre} Cantidad:${this.cnt} Precio:${this.Precio}`
    }
    
 }
 