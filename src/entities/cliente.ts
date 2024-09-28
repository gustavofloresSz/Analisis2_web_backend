import { Entity,Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { Ordenes } from "./ordenes";

@Entity()
export class Cliente extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({nullable:true})
    codigo: string

    @Column({nullable:true})
    nombre: string

    @Column({nullable:true})
    apellido: string

    @Column({nullable:true})
    edad: number

    @OneToMany(() => Ordenes, ordenes => ordenes.cliente)
    ordenes: Ordenes[];
}