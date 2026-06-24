import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pets.dto';

@Controller('pets') // rota /pets
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post() // DECORATOR define metodo POST para '/pets'
  createPet(@Body() pet: CreatePetDto) {
    this.petsService.createPet(pet);
  }

  @Get() // DECORATOR define metodo GET para '/pets'
  getAllPets() {
    let pets = this.petsService.getAllPets();
    return { message: "sucess", data: pets };
  }
}
