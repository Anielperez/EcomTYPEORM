import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { tienda } from "./tiendaModel";

@Entity('comerciantes')
export class comerciante {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    dni: String;

    @Column()
    nombre: String;

    @Column()
    apellido: String;

    @Column()
    email: String;

    @Column()
    profesion: String;

    @Column()
    telefono: String;

    @CreateDateColumn()
    createAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany(() => tienda, (tienda) => tienda.comerciante)
    tiendas: tienda[]

}