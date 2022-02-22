import { Module } from '@nestjs/common';
import { BioDataModule } from 'src/bio-data/bio-data.module';
import { LinkedIdentityModule } from 'src/linked-identity/linked-identity.module';

@Module({
    imports: [BioDataModule, LinkedIdentityModule]
})
export class BioDataRegistModule {}

