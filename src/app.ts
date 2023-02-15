

import { ListaTemplate } from "./clases/ListaTemplate.js"
import { Producto } from "./clases/Producto.js"  //Tenemos que poner explicitamente Producto.js, la extension js hay que ponerla

import {v4} from 'uuid'


const formulario = document.querySelector('form')!

const txtDes = document.querySelector('#Descripcion') as HTMLInputElement
const txtCnt = document.querySelector('#Cantidad') as HTMLInputElement
const txtPrecio= document.querySelector('#Precio') as HTMLInputElement

const ul = document.querySelector('ul')!

const lista = new ListaTemplate(ul)

formulario.addEventListener('submit',(e:Event)=>{
  e.preventDefault()
  console.log('**submit**')
  console.log(txtDes.value,txtCnt.value,txtPrecio.value)

  let doc=new Producto(txtDes.value,txtCnt.valueAsNumber,txtPrecio.valueAsNumber)
  lista.render(doc,'end')
  txtDes.value=''
  txtCnt.value=''
  txtPrecio.value=''
})

const output = document.querySelector('pre') as HTMLPreElement  



let Productos: Producto[] =[] 

output.innerHTML= JSON.stringify(Productos,null,2)










