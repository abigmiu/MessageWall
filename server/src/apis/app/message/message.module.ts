import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Tag } from 'src/apis/admin/tags/entities/tag.entity';
import { Report } from './entities/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message, Tag, Report])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
