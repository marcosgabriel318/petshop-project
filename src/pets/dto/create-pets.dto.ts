export class CreatePetDto {
  constructor(name: string, especie: string, age: number, ownerId: string) {
    this.name = name;
    this.especie = especie;
    this.age = age;
    this.owner = {
      id: ownerId,
    } 
  }

  name: string;
  especie: string;
  age: number;
  owner: {
    id: string
  }
}
