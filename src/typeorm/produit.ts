import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'produit' , schema: 'public'})
export class Produit {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;
    @Column({
        type: "varchar",
        name: "produit",
        default:null
    })
    produit: String;

    @Column({
        type: "varchar",
        name: "taux",
        default:null
    })
    taux: number;
}