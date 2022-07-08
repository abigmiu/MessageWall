import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({
    description: '昵称',
  })
  @Length(2, 8, {
    message: '昵称字数为2到8个字',
  })
  nickname: string;

  @ApiProperty({
    description: '颜色',
  })
  color: string;

  @ApiProperty({
    description: '内容',
  })
  @Length(10, 500, {
    message: '留言字数为10到500字',
  })
  content: string;

  @ApiProperty({
    description: '标签ID',
  })
  tagId: number;
}
