import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Graphs {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  algorithm_id: number;

  @Column()
  graph: string;
}
