import { OwnerService } from './owner.service'
import { Body, Controller, Get, Post, ParseIntPipe, Param, Put, Delete } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';

@Controller('owners') // rota /owners
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post() // DECORATOR define metodo POST para '/owners'
  createOwner(@Body() owner: CreateOwnerDto) {
    this.ownerService.createOwner(owner);
  }

  @Get() // DECORATOR define metodo GET para '/owners'
  getAllOwners() {
    let owners = this.ownerService.getAllOwners();
    return { message: "sucess", data: owners };
  }

  @Get(':id') // DECORATOR define metodo GET para '/owners/:id'
  getOwnerById(@Param('id', ParseIntPipe) id) {
    let owner = this.ownerService.getOwnerById(id);
    return { message: "sucess", data: owner };
  }

  @Put(':id') // DECORATOR define metodo PUT para '/owners/:id'
  updateOwner(@Body() updatedOwner: CreateOwnerDto, @Param('id', ParseIntPipe) id) {
    this.ownerService.updateOwner(id, updatedOwner);
  }

  @Delete(':id') // DECORATOR define metodo DELETE para '/owners/:id'
  deleteOwner(@Param('id', ParseIntPipe) id) {
    this.ownerService.deleteOwner(id);
  }
}   