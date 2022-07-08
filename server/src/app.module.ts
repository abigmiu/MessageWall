import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';

import { AdminTagsModule } from './apis/admin/tags/tags.module';
import { AdminSubtitleModule } from './apis/admin/subtitle/subtitle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminMessageModule } from './apis/admin/message/message.module';
import { MessageModule } from './apis/app/message/message.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('db'),
    }),
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          config: configService.get('redis'),
        };
      },
    }),

    AdminTagsModule,
    AdminSubtitleModule,
    AdminMessageModule,
    MessageModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
