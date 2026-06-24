export class CreatePetDto {
  constructor(id: number, name: string, especie: string, age: number) {
    this.id = id;
    this.name = name;
    this.especie = especie;
    this.age = age;
  }

  id: number;
  name: string;
  especie: string;
  age: number;
}
