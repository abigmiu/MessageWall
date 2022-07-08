import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
  ParseIntPipe,
  ClassSerializerInterceptor,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { RealIp } from 'nestjs-real-ip';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { QueryPageMessage } from './dto/query-page-message.dto';

@ApiTags('Pc留言')
@Controller('message')
@UseInterceptors(ClassSerializerInterceptor)
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @ApiOperation({
    summary: '创建留言',
  })
  @Post()
  async create(@Body() createMessageDto: CreateMessageDto, @RealIp() ip: string) {
    const isIpLimit = await this.messageService.isIpLimit(ip);
    if (isIpLimit) {
      throw new BadRequestException('一小时内最多留言5次');
    }
    await this.messageService.create(createMessageDto);
    await this.messageService.setIpCount(ip);
  }

  @ApiOperation({
    summary: '获取分页数据',
  })
  @Get()
  findPage(@Query() query: QueryPageMessage) {
    console.log(query);
    return 'page';
  }

  @ApiOperation({
    summary: '获取详情',
  })
  @ApiParam({
    name: 'id',
    type: 'integer',
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.messageService.findOne(id);
  }
}
