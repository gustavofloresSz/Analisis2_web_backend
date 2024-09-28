import { DataSource } from "typeorm";
import { Cliente } from "./entities/cliente";
import { Productos } from "./entities/productos";
import { Ordenes } from "./entities/ordenes";

//conexion con la BD
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234root",
    database: "web_prueba",
    synchronize: true,
    entities:[Cliente,Productos,Ordenes]
 })