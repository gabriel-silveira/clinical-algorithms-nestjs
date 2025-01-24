import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Graphs } from "./graphs.entity";
import { GraphsService } from "./graphs.service";
import { GraphsController } from "./graphs.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Graphs])],
  exports: [GraphsService],
  providers: [GraphsService],
  controllers: [GraphsController]
})
export class GraphsModule {}
