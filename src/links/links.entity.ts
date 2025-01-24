import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Links {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recommendation_id: number;

  @Column()
  url: string;
}
