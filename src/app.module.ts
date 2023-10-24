import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Directory } from './directory.entity';
import { DirectoriesController } from './directories.controller';
import { DirectoriesService } from './directories.service';
import { DirectoriesModule } from './directories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'sqlite',
      // database: 'database.sqlite',
      // entities: [Directory],
      // synchronize: true,
      // logging: true,
      // keepConnectionAlive: true,
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'practica2',
      entities: [Directory],
    }),
    DirectoriesModule,
  ],
  controllers: [AppController, DirectoriesController],
  providers: [AppService, DirectoriesService],
})
export class AppModule {}
