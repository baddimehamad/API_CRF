import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'station' , schema: 'public'})
export class Station {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;
    @Column({
        type: "varchar",
        name: "station",
    })
    station: String;

}