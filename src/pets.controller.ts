import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './create-pets.dto';

@Controller('pets') // rota /pets
export class PetsController {
constructor(private readonly petsService: PetsService) {}

  @Post() // DECORATOR define metodo POST para '/pets'
    createPet(@Body() pet: CreatePetDto) {
        this.petsService.createPet(pet);
  }

  @Get() // DECORATOR define metodo GET para '/pets'
  getAllPets() {
    return this.petsService.getAllPets();
  }
}