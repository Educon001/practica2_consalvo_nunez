import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Directory } from './directory.entity';
import { Email } from './email.entity';
@Injectable()
export class DirectoriesService {
  constructor(
    @InjectRepository(Directory)
    private directory : Repository<Directory>
  ){}
  
  async getDirectories(): Promise<Directory[]> {
    return await this.directory.find({relations : ["emails"]});
  }

  async getOneDirectory(id :number): Promise<Directory> {
    return await this.directory.findOne({where:{id: id},relations:["emails"]})

  }

}
