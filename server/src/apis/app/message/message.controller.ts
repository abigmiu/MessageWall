import { Controller, Get, Post, Body, Param, Delete, BadRequestException } from '@nestjs/common';
import { RealIp } from 'nestjs-real-ip';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Pc留言')
@Controller('message')
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
  findPage() {
    return 'page';
  }

  @ApiOperation({
    summary: '获取详情',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(+id);
  }

  @ApiOperation({
    summary: '删除详情',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(+id);
  }
}
