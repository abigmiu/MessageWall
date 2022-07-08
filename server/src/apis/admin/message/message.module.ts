import { Module } from '@nestjs/common';
import { AdminMessageService } from './message.service';
import { AdminMessageController } from './message.controller';

@Module({
  controllers: [AdminMessageController],
  providers: [AdminMessageService],
})
export class AdminMessageModule {}
