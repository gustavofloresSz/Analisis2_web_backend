import { Router } from "express";
import { ClienteController } from "./controllers/usuarios.controller";
import { ProductoController } from "./controllers/productos.controller";
import { OrdenesController } from "./controllers/ordenes.controller";

//aca van las rutas
export class AppRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new ClienteController()
        router.get("/clientes",(request,response) => controller.get_usuarios(response))
        router.post("/clientes",(request,response) => controller.add_usuarios(request,response))

        const controller2 = new ProductoController()
        router.get("/productos",(request,response) => controller2.get_productos(response))
        router.post("/productos",(request,response) => controller2.add_productos(request,response))
        
        const controller3 = new OrdenesController()
        router.get("/ordenes",(request,response) => controller3.get_ordenes(response))
        router.post("/ordenes",(request,response) => controller3.add_ordenes(request,response))
        return router;    
    }
}