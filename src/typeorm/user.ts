import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fournisseur } from "./fournisseur";
@Entity({ name: 'user' , schema: 'public'})
export class User {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;
    @Column({
        type: "varchar",
        name: "nom",
    })
    nom: String;
    @Column({
        type: "varchar",
        name: "prenom",
    })
    prenom: String;
    @Column({
        type: "varchar",
        name: "username",
    })
    username: String;
    @Column({
        type: "varchar",
        name: "password",
    })
    password: String;
    @Column({
        type: "varchar",
        name: "email",
    })
    email: String;
    @Column({
        type: "boolean",
        name: "active",
        default: true
    })
    active: boolean;
    @Column({
        type: "varchar",
        name: "role",
        default:3
    })
    role: number;
    @Column({
        type: "datetime",
        name: "last_login",
        default:null
    })
    last_login: Date;
}