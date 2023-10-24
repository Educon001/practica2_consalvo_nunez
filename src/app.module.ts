import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Directory } from './directory.entity';
import { DirectoriesController } from './directories.controller';
import { DirectoriesService } from './directories.service';
import { DirectoriesModule } from './directories.module';
import * as process from 'process';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '12345678',
      database: process.env.DB_NAME || 'practica2',
      entities: [Directory],
    }),
    DirectoriesModule,
  ],
  controllers: [AppController, DirectoriesController],
  providers: [AppService, DirectoriesService],
})
export class AppModule {}
