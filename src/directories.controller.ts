import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DirectoriesService } from './directories.service';
import { DirectoryDto } from './directory.dto';

@Controller('directories')
export class DirectoriesController {
  constructor(private readonly appService: DirectoriesService) {}

  @Get()
  async getDirectories() {
    return await this.appService.getDirectories();
  }
  @Get(':id')
  async getOneDirectory(@Param() params: any) {
    return await this.appService.getOneDirectory(params.id);
  }

  @Post()
  async createDirectory(@Body() directoryDto: DirectoryDto) {
    return await this.appService.createDirectory(directoryDto);
  }
}
