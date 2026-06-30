import { Owner } from '../owners/owner.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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

  @ManyToOne(() => Owner, (owner) => owner.pets, {})
  owner!: Owner;
}
