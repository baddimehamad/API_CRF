import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fournisseur } from "./fournisseur";
@Entity({ name: 'vignette' , schema: 'public'})
export class Vignette {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id'
    })
    id: number;
    @Column({
        type: "varchar",
        name: "bon_fact",
        length: 1,
        default:null
    })
    bon_fact: String;
    @Column({
        type: "varchar",
        name: "codesoci",
        length: 2,
        default:null
    })
    @Column({
        type: "varchar",
        name: "refefact",
        length: 6,
        default:null
    })
    refefact: String;
    @Column({
        type: "varchar",
        name: "refreleve",
        length: 6,
        default:null
    })
    refreleve: String;
    @Column({
        type: "varchar",
        name: "mois_bon",
        length: 2,
        default:null
    })
    mois_bon: String;
    @Column({
        type: "varchar",
        name: "annee_bon",
        length: 4,
        default:null
    })
    annee_bon: String;
    @Column({
        type: "varchar",
        length: 8,
        name: "date_bon",
        default:null
    })
    date_bon: String;
    @Column({
        type: "varchar",
        name: "numeimma",
        length: 8,
        default:null
    })
    numeimma: String;
    @Column({
        type: "varchar",
        name: "codalfbo",
        length: 2,
        default:null
    })
    codalfbo: String;
    @Column({
        type: "varchar",
        name: "nume_bon",
        length: 8,
        default:null
    })
    nume_bon: String;
    @Column({
        type: "varchar",
        name: "numeprod",
        length: 3,
        default:null
    })
    numeprod: String;
    @Column({
        type: "varchar",
        name: "quantite",
        length: 6,
        default:null
    })
    quantite: String;
    @Column({
        type: "varchar",
        name: "prixunit",
        length: 6,
        default:null
    })
    prixunit: String;
    @Column({
        type: "varchar",
        name: "total_brut",
        length: 7,
        default:null
    })
    total_brut: String;
    @Column({
        type: "varchar",
        name: "montvign",
        length: 7,
        default:null
    })
    montvign: String;
    @Column({
        type: "varchar",
        name: "kilometr",
        length: 6,
        default:null
    })
    kilometr: String;
    @Column({
        type: "varchar",
        name: "code_sta",
        length: 3,
        default:null
    })
    code_sta: String;
    @Column({
        type: "varchar",
        name: "code_for",
        length: 8,
        default:null
    })
    code_for: String;
    @Column({
        type: "varchar",
        name: "ville",
        length: 20,
        default:null
    })
    ville: String;
    @Column({
        type: "varchar",
        name: "user_id"
    })
    user_id: String;
    @Column({
        type: "varchar",
        name: "lieu",
        default:null
    })
    lieu: String;
    @Column({
        type: "boolean",
        name: "transfered",
        default: false
    })
    transfered: boolean;
    @Column({
        type: "datetime",
        name: "date_transfer",
        default:null
    })
    date_transfer: Date;
    @Column({
        type: "datetime",
        name: "date_facture",
        default:null
    })
    date_facture: Date;
    @Column({
        type: "datetime",
        name: "date_relevet",
        default:null
    })
    date_relevet: Date;
}