import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { NestMicroserviceModule } from './nest-microservice.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(NestMicroserviceModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3001,
    },
  });
  await app.listen();
}
bootstrap();
