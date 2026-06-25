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

  getPetById(id) {
    return this.pets.find((pet) => pet.id === id);
  }

  createPet(pet) {
    this.pets.push(pet);
  }

  deletePet(id) {
    this.pets = this.pets.filter((pet) => pet.id !== id);
  }

  updatePet(id, dataPet){
    this.pets = this.pets.map((pet) => {
      if(pet.id === id){
        return {...pet, ...dataPet};
      }
      return pet;
    });
  }
}
