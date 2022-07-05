import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';

const configService = new ConfigService();
const redisConfig = configService.get('redis');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    RedisModule.forRoot({
      config: redisConfig,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
