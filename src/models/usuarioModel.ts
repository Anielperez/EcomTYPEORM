import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('usuarios')
export class usuario {

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

    @CreateDateColumn()
    createAt: Date;
        
    @UpdateDateColumn()
    updateAt: Date;

}