import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminTagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('标签')
@Controller('admin/tags')
export class AdminTagsController {
  constructor(private readonly tagsService: AdminTagsService) {}

  @ApiOperation({
    summary: '创建标签',
  })
  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Get('list')
  findAll() {
    return this.tagsService.findAll();
  }

  @Get()
  findPage() {
    return this.tagsService.findPage();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(+id, updateTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagsService.remove(+id);
  }
}
