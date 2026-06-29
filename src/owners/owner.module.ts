import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { ownerProvider } from './owner.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [OwnerController],
  providers: [
    ...ownerProvider,
    OwnerService],
})

export class OwnerModule {}