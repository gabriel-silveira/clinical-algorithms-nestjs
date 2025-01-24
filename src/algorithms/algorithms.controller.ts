import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { AlgorithmsService } from './algorithms.service';
import { Algorithms } from "./algorithm.entity";

@Controller('algorithms')
export class AlgorithmsController {
  constructor(private readonly algorithmsService: AlgorithmsService) {}

  @Get()
  private index() {
    return this.algorithmsService.index();
  }

  @Get(':id')
  private show(@Param() params: any) {
    return this.algorithmsService.show(params.id);
  }

  @Post()
  create(@Body() algorithm: Algorithms) {
    return this.algorithmsService.create(algorithm);
  }
}
