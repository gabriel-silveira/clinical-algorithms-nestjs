import { Controller, Body, Get, Post } from '@nestjs/common';
import { AlgorithmsService } from './algorithms.service';
import { CreateAlgorithmDto } from "./dtos/create-algorithm-dto";

@Controller('algorithms')
export class AlgorithmsController {
  constructor(private readonly algorithmsService: AlgorithmsService) {}

  @Get()
  private index() {
    return this.algorithmsService.index();
  }

  @Post()
  create(@Body() algorithm: CreateAlgorithmDto) {
    return this.algorithmsService.create(algorithm);
  }
}
