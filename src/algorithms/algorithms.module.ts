import { Module } from '@nestjs/common';
import { AlgorithmsService } from './algorithms.service';
import { AlgorithmsController } from './algorithms.controller';

@Module({
  imports: [],
  providers: [AlgorithmsService],
  controllers: [AlgorithmsController]
})
export class AlgorithmsModule {
}
