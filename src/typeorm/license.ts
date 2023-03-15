import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'license' , schema: 'public'})
export class License {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;
    @Column({
        type: "varchar",
        name: "de",
    })
    de: String;
    @Column({
        type: "varchar",
        name: "a",
    })
    a: String;
    @Column({
        type: "varchar",
        name: "user_id",
    })
    machine_num: String;
}