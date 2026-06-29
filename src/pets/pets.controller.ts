import { Body, Controller, Get, Post, Put, Param, Delete, HttpCode } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pets.dto';
import { UpdatePetDto } from './dto/update-pets.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async createPet(@Body() pet: CreatePetDto) {
    return this.petsService.createPet(pet);
  }

  @Get()
  async getAllPets() {
    return this.petsService.getAllPets();
  }

  @Get(':id')
  async getPetById(@Param('id') id) {
   return this.petsService.getPetById(id);
  
  }

  @Put(':id')
  @HttpCode(204)
  async updatePet(@Body() pet: UpdatePetDto, @Param('id') id) {
    return this.petsService.updatePet(id, pet);
  }

  @Delete(':id')
  @HttpCode(204)
  async deletePet(@Param('id') id) {
    return this.petsService.deletePet(id);
  }
}
