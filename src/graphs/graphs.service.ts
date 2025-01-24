import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Graphs } from "./graphs.entity";
import { Repository } from "typeorm";

@Injectable()
export class GraphsService {
  constructor(
    @InjectRepository(Graphs)
    private graphsRepository: Repository<Graphs>
  ) {}

  index(): Promise<Graphs[]> {
    return this.graphsRepository.find();
  }

  create(graph: Graphs) {
    return this.graphsRepository.save(graph);
  }
}
