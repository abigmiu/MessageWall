import { Controller, Get, Param, Delete } from '@nestjs/common';
import { AdminMessageService } from './message.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('留言管理')
@Controller('admin/message')
export class AdminMessageController {
  constructor(private readonly messageService: AdminMessageService) {}

  @ApiOperation({
    summary: '获取全部数据',
  })
  @Get('list')
  findAll() {
    return this.messageService.findAll();
  }

  @ApiOperation({
    summary: '获取详情',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(+id);
  }

  @ApiOperation({
    summary: '删除留言',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(+id);
  }
}
