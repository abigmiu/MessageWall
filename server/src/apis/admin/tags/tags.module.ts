import { Module } from '@nestjs/common';
import { AdminTagsService } from './tags.service';
import { AdminTagsController } from './tags.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  controllers: [AdminTagsController],
  providers: [AdminTagsService],
})
export class AdminTagsModule {}
