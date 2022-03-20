import { Injectable } from '@nestjs/common';
import { ItemDto } from './item.dto';
import { ItemEntity } from './item.entity';
import { ItemRepository } from './item.repository';

@Injectable()
export class NestMicroserviceService {
  // constructor(private readonly itemRepository: ItemRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  createItem(itemDto: ItemDto) {
    const item = new ItemEntity();
    item.name = itemDto.name;
    return { id: 9, name: itemDto.name }; // this.itemRepository.save(item);
  }
  getItemById(id) {
    return { id: 9, name: 'test' };
    // return this.itemRepository.findOne(id);
  }
}
