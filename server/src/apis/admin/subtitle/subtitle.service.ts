import { Injectable } from '@nestjs/common';
import { CreateSubtitleDto } from './dto/create-subtitle.dto';
import { UpdateSubtitleDto } from './dto/update-subtitle.dto';
import { RedisService } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class AdminSubtitleService {
  private redis: Redis;
  constructor(private redisService: RedisService) {
    this.redis = this.redisService.getClient();
  }

  create(createSubtitleDto: CreateSubtitleDto) {
    this.redis.set('mw-subtitle', createSubtitleDto.content);
  }

  find() {
    return this.redis.get('mw-subtitle');
  }
}
