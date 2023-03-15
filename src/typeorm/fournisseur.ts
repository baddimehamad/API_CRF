import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'fournisseur' , schema: 'public'})
export class Fournisseur {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;
    @Column({
        type: "varchar",
        name: "fournisseur",
    })
    fournisseur: String;
    @Column({
        type: "varchar",
        name: "adresse",
    })
    adresse: String;
    @Column({
        type: "varchar",
        name: "telephone",
    })
    telephone: String;
    @Column({
        type: "varchar",
        name: "email",
    })
    email: String;
    @Column({
        type: "varchar",
        name: "codesoci",
        length: 3
    })
    codesoci: string;

}