import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { petsProvider} from './pets.providers';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PetsController],
  providers: [
    ...petsProvider, 
    PetsService],
})

export class PetsModule {}