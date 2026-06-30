import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Owner } from './owner.entity';
import { DataDto } from 'shared/dto/data.dto';
import { InjectRepository, } from '@nestjs/typeorm';
import { Pet } from 'pets/pets.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  async createOwner(owner) {
    return new DataDto('Sucess', [await this.ownerRepository.save(owner)]);
  }

  async getAllOwners() {
    let data = await this.ownerRepository.find({ relations: {pets: true},
    })
    console.log(data)
    return new DataDto('Sucess', data);
  }

  async getOwnerById(id) {
    return new DataDto('Sucess', [
      await this.ownerRepository.findOne({ where: { id } }),
    ]);
  }

  async updateOwner(id, updatedOwner) {
    await this.ownerRepository.update(id, updatedOwner);
    return new DataDto('Sucess', []);
  }

  async deleteOwner(id) {
    await this.ownerRepository.delete(id);
    return new DataDto('Sucess', []);
  }
}
