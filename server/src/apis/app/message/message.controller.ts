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
import { ReportMessageDto } from './dto/report-message.dto';

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
  async findPage(@Query() query: QueryPageMessage) {
    return await this.messageService.findPage(query);
  }

  @ApiOperation({
    summary: '获取详情',
  })
  @ApiParam({
    name: 'id',
    type: 'integer',
  })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.messageService.findOne(id);
  }

  @Post('report/:id')
  @ApiOperation({
    summary: '举报',
  })
  @ApiParam({
    name: 'id',
    type: 'integer',
  })
  async report(@Param('id', ParseIntPipe) id: number, @Body() reportMessageDto: ReportMessageDto) {
    await this.messageService.report(id, reportMessageDto);
  }
}
