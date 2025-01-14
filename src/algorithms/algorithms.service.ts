import { Injectable } from '@nestjs/common';
import { CreateAlgorithmDto } from './dtos/create-algorithm-dto';

global.algorithms = [
  {
    name: 'Dengue',
    description: 'Algoritmo de dengue',
  },
];

@Injectable()
export class AlgorithmsService {
  index() {
    return global.algorithms;
  }

  create(algorithm: CreateAlgorithmDto) {
    global.algorithms.push(algorithm)

    return algorithm
  }
}
