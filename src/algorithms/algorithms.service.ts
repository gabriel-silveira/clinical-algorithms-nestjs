import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Algorithms } from './algorithm.entity';
import { GraphsService } from '../graphs/graphs.service';

@Injectable()
export class AlgorithmsService {
  constructor(
    @InjectRepository(Algorithms)
    private algorithmsRepository: Repository<Algorithms>,
    private graphsService: GraphsService,
  ) {}

  index(): Promise<Algorithms[]> {
    return this.algorithmsRepository.find();
  }

  show(id: number): Promise<Algorithms | null> {
    return this.algorithmsRepository.findOneBy({ id });
  }

  async create(algorithm: Algorithms) {
    const createdAlgorithm = await this.algorithmsRepository.save(algorithm);

    await this.graphsService.create({
      algorithm_id: createdAlgorithm.id,
      graph: '',
    });

    return createdAlgorithm;
  }

  update(id: number, algorithm: Algorithms) {
    return this.algorithmsRepository.update(id, algorithm);
  }

  delete(id: number) {
    return this.algorithmsRepository.delete(id);
  }
}
