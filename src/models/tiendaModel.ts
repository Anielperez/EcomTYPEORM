import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { usuario } from "./usuarioModel";
import { comerciante } from "./comerciantesModel";

@Entity('tiendas')
export class tienda {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: String;

    @Column('text')
    descripcion: String;

    @CreateDateColumn()
    createAt: Date;
            
    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne(() => comerciante, (comerciante) => comerciante.tiendas)
    @JoinColumn({name: 'comerciante_id'})
    comerciante: comerciante
}