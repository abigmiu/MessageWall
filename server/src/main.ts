import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bootStrap from './bootstrap';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await bootStrap(app);
}
bootstrap();
