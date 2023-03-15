import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'ville' , schema: 'public'})
export class Ville {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;
    @Column({
        type: "varchar",
        name: "ville",
    })
    ville: String;

}