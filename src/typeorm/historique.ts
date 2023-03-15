import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'historique' , schema: 'public'})
export class Historique {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;
    @Column({
        type: "varchar",
        name: "ip_machine",
    })
    ip_machine: String;
    @Column({
        type: "varchar",
        name: "event",
    })
    event: String;
    @Column({
        type: "datetime",
        name: "date_event",
        default:null
    })
    date_event: Date;
    @Column({
        type: "varchar",
        name: "user_id",
    })
    user_id: String;
}