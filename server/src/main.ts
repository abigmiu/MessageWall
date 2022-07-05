import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bootStrap from './bootstrap';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  bootStrap(app);
  await app.listen(3000);
}
bootstrap();
