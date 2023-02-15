//crear clases
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Producto = /** @class */ (function () {
    function Producto(n, c, p) {
        this.Nombre = n;
        this.cnt = c;
        this.Precio = p;
        this.Total = (c * p); //Cnt*Precio
    }
    Producto.prototype.toString = function () {
        return JSON.stringify(this, null, 2);
    };
    Producto.prototype.log = function () {
        console.log("Nombre: ".concat(this.Nombre, " cnt:").concat(this.cnt, " Precio:").concat(this.Precio, " Total:").concat(this.Total));
    };
    return Producto;
}());
var Producto1 = new Producto('coca cola', 1, 2.00);
var Producto2 = new Producto('Cafe', 1, 0.80);
//IIFE: Expresión de función ejecutada inmediatamente o un patron de diseño llamado funcion autoejecutable
//Tambien sirve para crear instancias de clases y tambien clases
//Podemos quitar el tipo producto
var producto3 = (function (nombre, cnt, precio) {
    var total = cnt * precio;
    return { Nombre: nombre, cnt: cnt, Precio: precio,
        Total: total,
        toString: function () {
            return JSON.stringify(this, null, 2);
        },
        log: function () {
            console.log("Nombre: ".concat(this.Nombre, " cnt:").concat(this.cnt, " Precio:").concat(this.Precio, " Total:").concat(this.Total));
        }
    };
})('Flan', 1, 2.50);
var Productos = [];
Productos.push(Producto1);
Productos.push(Producto2);
Productos.push(producto3);
//para Añadir de esta manera, creando un objeto literal y haciendo typecasting tenemos que hacer typeCasting
Productos.push({ Nombre: 'Fanta', cnt: 1, Precio: 1.00, Total: 2.00 });
//Actualmente este seria la mejor opcion para añadir al array utilizando el operador spread '...Productos'
Productos = __spreadArray(__spreadArray([], Productos, true), [{ Nombre: 'Tostada', cnt: 1, Precio: 1.00, Total: 2.00 }], false);
//podemos desestructurar un objeto
var Nombre = Producto1.Nombre, cnt = Producto1.cnt, Precio = Producto1.Precio, Total = Producto1.Total;
console.log(Nombre, cnt, Precio, Total);
//tambien podriamos haber hecho de la manera tracicional
var Nombre1 = Producto2.Nombre;
var cnt1 = Producto2.cnt;
var Precio1 = Producto2.Precio;
//Ejemplo de desestructuracion de objeto a variables
function setInsertSqlProducto(p) {
    var Nombre = p.Nombre, cnt = p.cnt, Precio = p.Precio, Total = p.Total;
    //le pasamos la cadena sql a un motor o libreria de base de datos, el tipico insert o update o delete
    return "insert into tabla (Nombre,Cantidad,Precio,Total) values ('".concat(Nombre, "',").concat(cnt, ",").concat(Precio, ",").concat(Total, ")");
}
var output = document.querySelector('pre');
//output.innerHTML=Producto1.toString()
//output.innerHTML = producto3.toString()
output.innerHTML = JSON.stringify(Productos, null, 2);
