import { OwnerService } from './owner.service'
import { Body, Controller, Get, Post } from '@nestjs/common';
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
}   