import { Request, Response } from "express";
import { Ordenes } from "../entities/ordenes";

export class OrdenesController {
    //metodo ver productos
    async get_ordenes(response: Response) {
        const ordenes = await Ordenes.find({relations:{cliente:true, producto:true}});
        response.json(ordenes)
    }

    //metodo agregar usuarios
    async add_ordenes(request:Request, response:Response){
        const {id_cliente,id_producto,cantidad,fecha} = request.body
        console.log(request.body)
        const ordenes = new Ordenes()
        ordenes.cantidad = cantidad
        ordenes.fecha = fecha
        ordenes.cliente = id_cliente
        ordenes.producto = id_producto
        await ordenes.save();
    }
}