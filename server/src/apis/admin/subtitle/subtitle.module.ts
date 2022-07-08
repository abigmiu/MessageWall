import { Module } from '@nestjs/common';
import { AdminSubtitleService } from './subtitle.service';
import { AdminSubtitleController } from './subtitle.controller';

@Module({
  controllers: [AdminSubtitleController],
  providers: [AdminSubtitleService],
})
export class AdminSubtitleModule {}
