import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Directory } from './directory.entity';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @ManyToOne(() => Directory, (directory) => directory.emails)
  directory: Directory[];
}
