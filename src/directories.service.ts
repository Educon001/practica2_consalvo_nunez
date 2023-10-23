import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Directory } from './directory.entity';
@Injectable()
export class DirectoriesService {
  constructor(
    @InjectRepository(Directory)
    private directory : Repository<Directory>
  ){}
  
  async getDirectories(): Promise<Directory[]> {
    return await this.directory.find();
  }

  async getOneDirectory(id :string): Promise<Directory[]> {
    return await this.directory.find(/*poner algo*/)

  }

}
