import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  pong(): string {
    return this.appService.pong();
  }
}
