import { Body, Controller, Get, Post, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pets.dto';

@Controller('pets') // define o endpoint como /pets
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  createPet(@Body() pet: CreatePetDto) {
    this.petsService.createPet(pet);
  }

  @Get()
  getAllPets() {
    let pets = this.petsService.getAllPets();
    return { message: "sucess", data: pets };
  }

  @Get(':id') 
  getPetById(@Param('id', ParseIntPipe) id) {
    let pet = this.petsService.getPetById(id);
    return { message: "sucess", data: pet };
  }

  @Put(':id')
  updatePet(@Body() pet: CreatePetDto, @Param('id', ParseIntPipe) id) {
    this.petsService.updatePet(id, pet);
  }

  @Delete(':id')
  deletePet(@Param('id', ParseIntPipe) id) {
    this.petsService.deletePet(id);
  }
}
