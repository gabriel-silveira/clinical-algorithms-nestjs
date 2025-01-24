import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Algorithms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  public: boolean;
}
