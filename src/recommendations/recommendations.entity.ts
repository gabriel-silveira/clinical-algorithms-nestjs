import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recommendations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  node_id: number;

  @Column()
  index: number;

  @Column()
  recommendation_type: string;

  @Column()
  description: string;

  @Column()
  intervention_type: string;

  @Column()
  intervention: string;

  @Column()
  comparator: string;

  @Column()
  direction: string;

  @Column()
  strength: string;

  @Column()
  certainty_of_the_evidence: string;

  @Column()
  additional_comments: string;

  @Column()
  recommendation_source: string;
}
