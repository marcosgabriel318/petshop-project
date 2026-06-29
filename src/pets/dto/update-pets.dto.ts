export class UpdatePetDto {
  constructor(name: string, especie: string, age: number) {
    this.name = name;
    this.especie = especie;
    this.age = age;
  }

  name: string;
  especie: string;
  age: number;
}
