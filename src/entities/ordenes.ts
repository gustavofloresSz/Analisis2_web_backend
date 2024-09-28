import { Entity,Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Cliente } from "./cliente";
import { Productos } from "./productos";

@Entity()
export class Ordenes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({nullable:true})
    cantidad: number

    @Column({nullable:true,type:"date"})
    fecha: Date

    @ManyToOne(() => Cliente, cliente => cliente.ordenes)
    @JoinColumn({ name: 'id_cliente' })
    cliente: Cliente

    @ManyToOne(() => Productos, producto => producto.id)
    @JoinColumn({ name: 'id_producto' })
    producto: Productos
}