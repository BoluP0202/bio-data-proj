import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BioDataRegistModule } from './bio-data-regist/bio-data-regist.module';
import { BioDataModule } from './bio-data/bio-data.module';
import { LinkedIdentityModule } from './linked-identity/linked-identity.module';

@Module({
  imports: [BioDataRegistModule, BioDataModule, LinkedIdentityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
