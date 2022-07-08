import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type, Transform } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class QueryPageMessage {
  // @ApiProperty({
  //   description: '页数',
  //   type: 'integer',
  //   default: 1,
  // })
  // @IsInt({
  //   message: 'page 不为整数',
  // })
  // @Type(() => Number)
  // page: number;

  @ApiProperty({
    description: '每页数量',
    type: 'integer',
    default: 20,
  })
  @IsInt({
    message: 'size 不为整数',
  })
  @Type(() => Number)
  size: number;

  @ApiProperty({
    description: 'lastID',
    type: 'integer',
    default: 0,
  })
  @IsInt({
    message: 'lastID 不为整数',
  })
  @Type(() => Number)
  lastId: number;
}
