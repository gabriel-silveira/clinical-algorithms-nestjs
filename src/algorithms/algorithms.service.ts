import { Injectable } from '@nestjs/common';

@Injectable()
export class AlgorithmsService {
  index() {
    return [
      {
        id: 1,
        name: 'Dengue',
      },
    ];
  }
}
