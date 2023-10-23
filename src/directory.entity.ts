import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Email } from './email.entity';

@Entity()
export class Directory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Email, (email) => email.directory)
  emails: Email[];
}
