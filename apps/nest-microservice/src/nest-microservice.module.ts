import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestMicroserviceController } from './nest-microservice.controller';
import { NestMicroserviceService } from './nest-microservice.service';
import { ItemEntity } from './item.entity';
import { ItemRepository } from './item.repository';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'passw0rD!',
    //   database: 'microdb',
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
    // TypeOrmModule.forFeature([ItemRepository, ItemEntity]),
  ],
  controllers: [NestMicroserviceController],
  providers: [NestMicroserviceService],
})
export class NestMicroserviceModule {}
