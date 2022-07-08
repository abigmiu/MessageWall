import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { Tag } from 'src/apis/admin/tags/entities/tag.entity';
import { RedisService } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class MessageService {
  private redis: Redis;
  constructor(
    @InjectRepository(Message)
    private readonly messageRepo: Repository<Message>,
    @InjectRepository(Tag)
    private readonly tagRepo: Repository<Tag>,
    private redisService: RedisService,
  ) {
    this.redis = this.redisService.getClient();
  }

  async create(createMessageDto: CreateMessageDto) {
    const validTagId = await this.tagRepo.findOne({
      where: {
        id: createMessageDto.tagId,
        del: false,
      },
    });

    if (!validTagId) {
      throw new BadRequestException('没有对应标签');
    }

    const message = new Message();
    message.color = createMessageDto.color;
    message.content = createMessageDto.content;
    message.tagId = createMessageDto.tagId;
    message.nickname = createMessageDto.nickname;

    await this.messageRepo.save(message);
  }

  async findOne(id: number) {
    const data = await this.messageRepo.findOne({
      where: {
        id,
        del: false,
      },
      // select: ['color', 'content', 'created_at', 'id', 'nickname', 'tagId'],
    });
    if (!data) {
      throw new BadRequestException('没有此留言');
    }
    return data;
  }

  async setIpCount(ip: string) {
    let count = await this.redis.get(`mw-ip-${ip}`);
    if (!count) {
      count = '0';
    }
    await this.redis.set(`mw-ip-${ip}`, (Number(count) + 1).toString());
    if (count === '0') {
      await this.redis.expire(`mw-ip-${ip}`, 60 * 60 * 60);
    }
  }

  async isIpLimit(ip: string) {
    let count = await this.redis.get(`mw-ip-${ip}`);
    if (!count) {
      count = '0';
    }
    return Number(count) >= 5;
  }
}
