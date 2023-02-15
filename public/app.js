import { ListaTemplate } from "./clases/ListaTemplate.js";
import { Producto } from "./clases/Producto.js"; //Tenemos que poner explicitamente Producto.js, la extension js hay que ponerla
const formulario = document.querySelector('form');
const txtDes = document.querySelector('#Descripcion');
const txtCnt = document.querySelector('#Cantidad');
const txtPrecio = document.querySelector('#Precio');
const ul = document.querySelector('ul');
const lista = new ListaTemplate(ul);
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('**submit**');
    console.log(txtDes.value, txtCnt.value, txtPrecio.value);
    let doc = new Producto(txtDes.value, txtCnt.valueAsNumber, txtPrecio.valueAsNumber);
    lista.render(doc, 'end');
    txtDes.value = '';
    txtCnt.value = '';
    txtPrecio.value = '';
});
const output = document.querySelector('pre');
let Productos = [];
output.innerHTML = JSON.stringify(Productos, null, 2);
