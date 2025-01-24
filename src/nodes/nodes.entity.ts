import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nodes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  algorithm_id: number;

  @Column()
  node_id: string;

  @Column()
  node_type: string;

  @Column()
  node_label: string;
}
