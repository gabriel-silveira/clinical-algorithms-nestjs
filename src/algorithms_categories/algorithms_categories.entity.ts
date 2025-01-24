import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AlgorithmsCategories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  algorithm_id: number;

  @Column()
  category_id: number;
}
