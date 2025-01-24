import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Algorithms } from './algorithm.entity';

@Injectable()
export class AlgorithmsService {
  constructor(
    @InjectRepository(Algorithms)
    private algorithmsRepository: Repository<Algorithms>,
  ) {}

  index(): Promise<Algorithms[]> {
    return this.algorithmsRepository.find();
  }

  show(id: number): Promise<Algorithms | null> {
    return this.algorithmsRepository.findOneBy({ id });
  }

  async create(algorithm: Algorithms) {
    return await this.algorithmsRepository.save(algorithm);
  }

  async update(id: number, algorithm: Algorithms) {
    return await this.algorithmsRepository.update(id, algorithm);
  }

  async delete(id: number) {
    return await this.algorithmsRepository.delete(id);
  }
}
