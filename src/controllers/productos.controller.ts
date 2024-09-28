import { Request, Response } from "express";
import { Productos } from "../entities/productos";

export class ProductoController {
    //metodo ver productos
    async get_productos(response: Response) {
        const productos = await Productos.find();
        response.json(productos)
    }

    //metodo agregar usuarios
    async add_productos(request:Request, response:Response){
        const {nombre,precio,stock} = request.body
        console.log(request.body)
        const producto = new Productos()
        producto.nombre = nombre
        producto.precio = precio
        producto.stock = stock
        await producto.save();
    }
}