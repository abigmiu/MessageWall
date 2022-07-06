import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, Max, MaxLength, Min } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    description: '标签名',
    type: 'string',
    example: '标签名',
  })
  @IsNotEmpty({
    message: '标签名不能为空',
  })
  @MaxLength(10, {
    message: '标签名不能超过10个子',
  })
  readonly name: string;

  @ApiProperty({
    description: '权重',
    required: false,
    type: 'int',
    default: 1,
    example: 1,
  })
  @IsOptional()
  @IsInt({
    message: '权重只能为整数',
  })
  @Min(1, {
    message: '权重最小为1',
  })
  @Max(99, {
    message: '权重最大为99',
  })
  readonly weight?: number;
}
