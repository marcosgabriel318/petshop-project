import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Owner } from "./owner.entity";
import { DataDto } from "shared/dto/data.dto";

@Injectable()
export class OwnerService {
  constructor(
    @Inject('OWNER_REPOSITORY')
    private ownerRepository: Repository<Owner>,
  ) {}

  async createOwner(owner) {
    return new DataDto("Sucess", [await this.ownerRepository.save(owner)]);
  }

  async getAllOwners() {
    return new DataDto("Sucess", await this.ownerRepository.find());
  }

  async getOwnerById(id) {
    return new DataDto("Sucess", [await this.ownerRepository.findOne({ where: { id } })]);
  }

  async updateOwner(id, updatedOwner) {
    await this.ownerRepository.update(id, updatedOwner);
    return new DataDto("Sucess", []);
  }

  async deleteOwner(id) {
    await this.ownerRepository.delete(id);
    return new DataDto("Sucess", []);
  }
}
