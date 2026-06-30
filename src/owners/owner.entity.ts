import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Pet } from '../pets/pets.entity'

@Entity()
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @JoinColumn()
  @OneToMany(() => Pet, (pet) => pet.owner)
  pets!: Pet[];
}
