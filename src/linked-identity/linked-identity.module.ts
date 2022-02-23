import { Module } from '@nestjs/common';
import { LinkedIdentityService } from './linked-identity.service';
import { LinkedIdentityController } from './linked-identity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkedIdentity } from './entities/linked-identity.entity';
import { BioDatum } from 'src/bio-data/entities/bio-datum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LinkedIdentity, BioDatum])],
  controllers: [LinkedIdentityController],
  providers: [LinkedIdentityService]
})
export class LinkedIdentityModule {}
