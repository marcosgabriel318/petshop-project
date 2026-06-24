import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';

@Module({
  imports: [],
  controllers: [AppController, PetsController],
  providers: [AppService, PetsService],
})
export class AppModule {}
