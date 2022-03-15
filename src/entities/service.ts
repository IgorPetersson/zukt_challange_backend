import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("services")
export class Service{
    @PrimaryGeneratedColumn("uuid")
    uuid!: string;

    @Column()
    localization!:string;

    @Column()
    problem!: string;

    @Column()
    status!: string;

    @CreateDateColumn()
    date!: Date;
}