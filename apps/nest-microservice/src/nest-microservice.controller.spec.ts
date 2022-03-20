import { Test, TestingModule } from '@nestjs/testing';
import { NestMicroserviceController } from './nest-microservice.controller';
import { NestMicroserviceService } from './nest-microservice.service';

describe('NestMicroserviceController', () => {
  let nestMicroserviceController: NestMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestMicroserviceController],
      providers: [NestMicroserviceService],
    }).compile();

    nestMicroserviceController = app.get<NestMicroserviceController>(
      NestMicroserviceController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
