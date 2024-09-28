import { Request, Response } from "express";
import { Cliente } from "../entities/cliente";

export class ClienteController {
    //metodo ver usuarios
    async get_usuarios(response: Response) {
        const clientes = await Cliente.find();
        response.json(clientes)
    }

    //metodo agregar usuarios
    async add_usuarios(request:Request, response:Response){
        const {codigo,nombre,apellido,edad} = request.body
        console.log(request.body)
        const cliente = new Cliente()
        cliente.codigo = codigo
        cliente.nombre = nombre
        cliente.apellido = apellido
        cliente.edad = edad
        await cliente.save();
    }
}