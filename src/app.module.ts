import { Module } from '@nestjs/common';
import { PetsService } from './pets/pets.service';
import { PetsController } from './pets/pets.controller';

@Module({
  imports: [],
  controllers: [PetsController],
  providers: [PetsService],
})
export class AppModule {}
