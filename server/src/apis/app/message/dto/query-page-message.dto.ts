import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class QueryPageMessage {
  @ApiPropertyOptional({
    description: '页数',
    type: 'integer',
    default: 1,
  })
  @IsOptional()
  @IsInt({
    message: 'page 不为整数',
  })
  @Type(() => Number)
  page?: number = 1;

  @ApiPropertyOptional({
    description: '每页数量',
    type: 'integer',
    default: 20,
  })
  @IsOptional()
  @IsInt({
    message: 'size 不为整数',
  })
  @Type(() => Number)
  size?: number = 20;

  @ApiPropertyOptional({
    description: '开始ID',
    type: 'integer',
    default: 0,
  })
  @IsOptional()
  @IsInt({
    message: 'startID 不为整数',
  })
  @Type(() => Number)
  startId?: number = 0;
}
