import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Directory } from './directory.entity';
import { Email } from './email.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'practica2',
      entities: [Directory, Email],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
