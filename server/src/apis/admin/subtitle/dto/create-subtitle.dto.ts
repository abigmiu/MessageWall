import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

export class CreateSubtitleDto {
  @ApiProperty({
    description: '内容',
  })
  @MinLength(3, {
    message: '最小长度不能小于3',
  })
  @MaxLength(50, {
    message: '最大长度不能超过50',
  })
  content: string;
}
