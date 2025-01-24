import { Controller, Get } from "@nestjs/common";
import { GraphsService } from "./graphs.service";

@Controller('algorithms')
export class GraphsController {
  constructor(private readonly graphsService: GraphsService) {}

  @Get()
  private index() {
    return this.graphsService.index();
  }
}