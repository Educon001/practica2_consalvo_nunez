import { IsString, IsEmail } from 'class-validator';

export class DirectoryDto {
  @IsString()
  name: string;

  @IsEmail({}, { each: true })
  emails: string[];
}
