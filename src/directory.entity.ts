import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Directory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('simple-array')
  emails: string[];
}
