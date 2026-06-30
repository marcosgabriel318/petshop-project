import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pet } from './pets.entity';
import { DataDto } from '../shared/dto/data.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private readonly petsRepository: Repository<Pet>,
  ) {}

  async createPet(pet) {
    return new DataDto('Sucess', [await this.petsRepository.save(pet)]);
  }

  async getAllPets() {
    return new DataDto('Sucess', await this.petsRepository.find());
  }

  async getPetById(id) {
    return new DataDto('Sucess', [
      await this.petsRepository.findOne({ where: { id } }),
    ]);
  }

  async updatePet(id, dataPet) {
    await this.petsRepository.update(id, dataPet);
    return new DataDto('Sucess', []);
  }

  async deletePet(id) {
    await this.petsRepository.delete(id);
    return new DataDto('Sucess', []);
  }
}
