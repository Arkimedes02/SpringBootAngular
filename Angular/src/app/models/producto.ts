export class Producto {
    id?: number;
    nombre: string;
    cantidad: number;
    fecha: Date;
    usuarioRegistro: string;

    constructor(nombre: string, cantidad: number, fecha: Date, usuarioRegistro: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.usuarioRegistro = usuarioRegistro;
      

    }
}


