import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Owner } from '../owners/owner.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  especie!: string;

  @Column()
  name!: string;

  @Column()
  age!: number;

  @Column()
  ownerId!: string;

  @ManyToOne(() => Owner, (owner) => owner.pets, {})
  owner!: Owner;
}
