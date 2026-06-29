import { Module } from '@nestjs/common';
import {OwnerModule} from './owners/owner.module';
import { PetsModule } from './pets/pets.modules';


@Module({
  imports: [OwnerModule, PetsModule],
})

export class AppModule {}

// Finalizar os endpoints e conectar TypeORM com o banco de dados.