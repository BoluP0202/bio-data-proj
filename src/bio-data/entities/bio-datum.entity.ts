import { LinkedIdentity } from "src/linked-identity/entities/linked-identity.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BioDatum {
    @PrimaryGeneratedColumn()
    entry: number;

    @Column()
    firstName: string;

    @Column({nullable: true})
    middleName: string;
    
    @Column()
    lastName: string;

    @Column()
    DOB: Date;

    @Column()
    nationality: string;

    @Column({nullable: true})
    countryOfBirth: string;

    @Column({nullable: true})
    stateOfBirth: string;

    @Column({nullable: true})
    townOfBirth: string;

    @Column({nullable: true})
    address: string;

    @Column({nullable: true})
    profession: string;

    @JoinColumn()
    @OneToOne(type => LinkedIdentity, linkedIdentity => linkedIdentity.bioDatum)
    linkedIdentity: LinkedIdentity;
}
