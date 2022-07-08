import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class ReportMessageDto {
  @ApiProperty({
    description: '举报昵称',
  })
  nickname: string;

  @ApiProperty({
    description: '被举报昵称',
  })
  report_nickname: string;

  @ApiProperty({
    description: '举报描述',
  })
  @Length(10, 50, {
    message: '举报描述为10 - 50字',
  })
  content: string;
}
