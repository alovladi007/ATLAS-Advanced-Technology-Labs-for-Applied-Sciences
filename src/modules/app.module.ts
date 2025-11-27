import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { OrgsModule } from './orgs/orgs.module';
import { JobsModule } from './jobs/jobs.module';
import { DatasetsModule } from './datasets/datasets.module';
import { ModelsModule } from './models/models.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    HealthModule,
    AuthModule,
    OrgsModule,
    JobsModule,
    DatasetsModule,
    ModelsModule,
    DomainModule,
  ],
})
export class AppModule {}
