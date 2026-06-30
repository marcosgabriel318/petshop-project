import { OwnerService } from './owner.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';

@Controller('owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  async createOwner(@Body() owner: CreateOwnerDto) {
    return this.ownerService.createOwner(owner);
  }

  @Get()
  async getAllOwners() {
    return this.ownerService.getAllOwners();
  }

  @Get(':id')
  async getOwnerById(@Param('id') id) {
    return this.ownerService.getOwnerById(id);
  }

  @Put(':id')
  @HttpCode(204)
  async updateOwner(@Body() updatedOwner: UpdateOwnerDto, @Param('id') id) {
    return this.ownerService.updateOwner(id, updatedOwner);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteOwner(@Param('id') id) {
    return this.ownerService.deleteOwner(id);
  }
}
