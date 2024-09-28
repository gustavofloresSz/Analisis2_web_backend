import { Entity,Column, PrimaryGeneratedColumn, BaseEntity, NumericType, OneToMany } from "typeorm";
import { Ordenes } from "./ordenes";

@Entity()
export class Productos extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({nullable:true})
    nombre: string

    @Column({nullable:true})
    precio: number

    @Column({nullable:true})
    stock: number

    @OneToMany(() => Ordenes, ordenes => ordenes.producto)
    ordenes: Ordenes[];
}