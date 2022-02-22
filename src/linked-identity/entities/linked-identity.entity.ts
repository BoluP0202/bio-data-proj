import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BioDatum } from "src/bio-data/entities/bio-datum.entity";
@Entity()
export class LinkedIdentity {
    @PrimaryGeneratedColumn()
    entry: number;

    @Column()
    NIN: string;

    @Column({nullable: true})
    BVN: string;

    @Column()
    phoneNumber: string;

    @JoinColumn()
    @OneToOne(type => BioDatum, bioDatum => bioDatum.linkedIdentity, {cascade:true})
    bioDatum: BioDatum;
}
