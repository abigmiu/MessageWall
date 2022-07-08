import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  ParseIntPipe,
} from '@nestjs/common';
import { AdminTagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('标签')
@Controller('admin/tags')
@UseInterceptors(ClassSerializerInterceptor)
export class AdminTagsController {
  constructor(private readonly tagsService: AdminTagsService) {}

  @ApiOperation({
    summary: '创建标签',
  })
  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @ApiOperation({
    summary: '获取全部数据',
  })
  @Get('list')
  findAll() {
    return this.tagsService.findAll();
  }

  @ApiOperation({
    summary: '分页',
  })
  @Get()
  findPage() {
    return this.tagsService.findPage();
  }

  @ApiOperation({
    summary: '获取详细信息',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'integer',
  })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.tagsService.findOne(id);
  }

  @ApiOperation({
    summary: '更新标签',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'integer',
  })
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(id, updateTagDto);
  }

  @ApiOperation({
    summary: '冻结标签',
  })
  @Patch('freeze/:id')
  freeze(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.freeze(id);
  }

  @ApiOperation({
    summary: '删除数据',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'integer',
  })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.remove(id);
  }
}
