export class Producto {
    constructor(n, c, p) {
        this.Nombre = n;
        this.cnt = c;
        this.Precio = p;
        this.Total = (c * p); //Cnt*Precio
    }
    toString() {
        return JSON.stringify(this, null, 2);
    }
    log() {
        console.log(`Nombre: ${this.Nombre} cnt:${this.cnt} Precio:${this.Precio} Total:${this.Total}`);
    }
    format() {
        return `Descripcion ${this.Nombre} Cantidad:${this.cnt} Precio:${this.Precio}`;
    }
}
