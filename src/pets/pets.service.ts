import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataDto } from '../shared/dto/data.dto';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private readonly petsRepository: Repository<Pet>,
  ) {}

  async createPet(pet) {
    const { ownerId, ...petData } = pet
    const created = await this.petsRepository.save({
      owner: { id: ownerId },
      ...petData
    });
    return new DataDto('Sucess', created);
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
