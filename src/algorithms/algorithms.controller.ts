import { Controller, Get } from '@nestjs/common';
import { AlgorithmsService } from './algorithms.service';

@Controller('algorithms')
export class AlgorithmsController {
  constructor(private readonly algorithmsService: AlgorithmsService) {}

  @Get()
  private index() {
    return this.algorithmsService.index();
  }
}
