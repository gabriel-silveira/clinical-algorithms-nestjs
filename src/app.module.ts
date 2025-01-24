import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AlgorithmsModule } from './algorithms/algorithms.module';
import { Algorithms } from './algorithms/algorithm.entity';
import { AlgorithmsCategories } from './algorithms_categories/algorithms_categories.entity';
import { Categories } from './categories/categories.entity';
import { Nodes } from './nodes/nodes.entity';
import { Graphs } from './graphs/graphs.entity';
import { Recommendations } from './recommendations/recommendations.entity';
import { Links } from './links/links.entity';

import { AppService } from './app.service';

import { AppController } from './app.controller';
import { GraphsModule } from "./graphs/graphs.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'gabriel',
      password: 'gabriel',
      database: 'clinical_algorithms',
      entities: [
        Algorithms,
        AlgorithmsCategories,
        Categories,
        Nodes,
        Graphs,
        Recommendations,
        Links,
      ],
      synchronize: false,
    }),
    AlgorithmsModule,
    GraphsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
