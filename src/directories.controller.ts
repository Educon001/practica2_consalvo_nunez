import { Controller, Get, Param } from '@nestjs/common';
import { DirectoriesService } from './directories.service';
import { Directory } from './directory.entity';

@Controller('directories')
export class DirectoriesController {
  constructor(private readonly appService: DirectoriesService) {}

  @Get("/all")
  async getDirectories(){
    return await this.appService.getDirectories();
  }
  @Get("/all")
  async getOneDirectory(@Param() id :string){
    return await this.appService.getOneDirectory(id);
  }

}
