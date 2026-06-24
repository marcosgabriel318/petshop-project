import { Module } from '@nestjs/common';
import { PetsService } from './pets/pets.service';
import { PetsController } from './pets/pets.controller';
import { OwnerService } from './owners/owner.service';
import { OwnerController } from './owners/owner.controller';

@Module({
  imports: [],
  controllers: [PetsController, OwnerController],
  providers: [PetsService, OwnerService],
})
export class AppModule {}
