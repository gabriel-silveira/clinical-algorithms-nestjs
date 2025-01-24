import { Module } from '@nestjs/common';

import { AlgorithmsService } from './algorithms.service';
import { AlgorithmsController } from './algorithms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Algorithms } from './algorithm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Algorithms])],
  providers: [AlgorithmsService],
  controllers: [AlgorithmsController],
})
export class AlgorithmsModule {}
