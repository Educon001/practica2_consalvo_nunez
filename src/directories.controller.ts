import { Controller, Get, Param } from '@nestjs/common';
import { DirectoriesService } from './directories.service';
import { Directory } from './directory.entity';

@Controller('directories')
export class DirectoriesController {
  constructor(private readonly appService: DirectoriesService) {}

  @Get()
  async getDirectories(){
    return await this.appService.getDirectories();
  }
  @Get(":id")
  async getOneDirectory(@Param() id :number){
    return await this.appService.getOneDirectory(id);
  }

}
