import { Controller, Get } from '@nestjs/common';
import { DirectoriesService } from './directories.service';

@Controller('directories')
export class DirectoriesController {
  constructor(private readonly appService: DirectoriesService) {}

  @Get()
  getDirectories(): string {
    return this.appService.getDirectories();
  }
}
