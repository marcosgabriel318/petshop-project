import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Pets {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  especie!: string;

  @Column()
  name!: string;

  @Column()
  age!: number;
}
