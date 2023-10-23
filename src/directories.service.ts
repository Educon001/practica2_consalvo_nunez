import { Injectable } from '@nestjs/common';

@Injectable()
export class DirectoriesService {
  getDirectories(): string {
    return 'Test';
  }
}
