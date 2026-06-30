import { Module } from '@nestjs/common';
import { OwnerModule } from './owners/owner.module';
import { PetsModule } from './pets/pets.modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppDataSource from 'database/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    OwnerModule,
    PetsModule,
  ],
})
export class AppModule {}
