import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Directory } from './directory.entity';
import { DirectoryDto } from './directory.dto';

@Injectable()
export class DirectoriesService {
  constructor(
    @InjectRepository(Directory)
    private directory: Repository<Directory>,
  ) {}

  async getDirectories(): Promise<Directory[]> {
    return await this.directory.find();
  }

  async getOneDirectory(id: number): Promise<Directory> {
    return await this.directory.findOneBy({ id });
  }

  async createDirectory(directoryDto: DirectoryDto): Promise<Directory> {
    const { name, emails } = directoryDto;

    // Create a newDirectory entity
    const newDirectory = this.directory.create({ name, emails });
    // Save the newDirectory entity to the database
    await this.directory.save(newDirectory);

    return newDirectory;
  }

  async updateDirectory(id: number, directoryDto: DirectoryDto): Promise<Directory> {
   await this.directory.update(id, directoryDto);
   return 
  }

  async deleteDirectory(id: number): Promise<Directory> {
    await this.directory.delete(id)
    return 
   }

}
