import { Injectable } from '@nestjs/common';

@Injectable()
export class PetsService {
  private pets = [
    { id: 1, name: 'Rex', especie: 'Cachorro', age: 5 },
    { id: 2, name: 'Nina', especie: 'Gato', age: 3 },
  ];
  getAllPets() {
    return this.pets;
  }
  createPet(pet) {
    this.pets.push(pet);
  }
}
