import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NestMicroserviceService } from './nest-microservice.service';

@Controller()
export class NestMicroserviceController {
  constructor(
    private readonly nestMicroserviceService: NestMicroserviceService,
  ) {}

  @Get()
  getHello(): string {
    return this.nestMicroserviceService.getHello();
  }

  @MessagePattern({ role: 'item', cmd: 'create' })
  createItem(itemDto) {
    return this.nestMicroserviceService.createItem(itemDto);
  }
  @MessagePattern({ role: 'item', cmd: 'get-by-id' })
  getItemById(id: number) {
    return this.nestMicroserviceService.getItemById(id);
  }
}
