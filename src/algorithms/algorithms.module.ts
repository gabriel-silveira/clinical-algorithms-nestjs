import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AlgorithmsService } from './algorithms.service';
import { AlgorithmsController } from './algorithms.controller';
import { Algorithms } from './algorithm.entity';
import { GraphsModule } from "../graphs/graphs.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Algorithms]),
    GraphsModule,
  ],
  providers: [AlgorithmsService],
  controllers: [AlgorithmsController],
})
export class AlgorithmsModule {}
