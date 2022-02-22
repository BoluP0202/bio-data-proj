import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BioDatum } from "src/bio-data/entities/bio-datum.entity";
@Entity()
export class LinkedIdentity {
    @PrimaryGeneratedColumn()
    entry: number;

    @Column()
    NIN: number;

    @Column({nullable: true})
    BVN: number;

    @Column()
    phoneNumber: number;

    @JoinColumn()
    @OneToOne(type => BioDatum, bioDatum => bioDatum.linkedIdentity, {cascade:true})
    bioDatum: BioDatum;
}
