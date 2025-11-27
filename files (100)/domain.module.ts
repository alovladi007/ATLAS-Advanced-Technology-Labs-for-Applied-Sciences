import { Module } from '@nestjs/common';
import { DomainController } from './domain.controller';
import { BioAIController } from './bioai.controller';
import { PhotonAIController } from './photonai.controller';
import { ElectroAIController } from './electroai.controller';

@Module({
  controllers: [DomainController, BioAIController, PhotonAIController, ElectroAIController],
})
export class DomainModule {}
