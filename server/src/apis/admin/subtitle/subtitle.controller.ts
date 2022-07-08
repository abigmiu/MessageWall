import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminSubtitleService } from './subtitle.service';
import { CreateSubtitleDto } from './dto/create-subtitle.dto';
import { UpdateSubtitleDto } from './dto/update-subtitle.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('副标题')
@Controller('admin/subtitle')
export class AdminSubtitleController {
  constructor(private readonly subtitleService: AdminSubtitleService) {}

  @ApiOperation({
    summary: '创建/更新',
  })
  @Post()
  create(@Body() createSubtitleDto: CreateSubtitleDto) {
    return this.subtitleService.create(createSubtitleDto);
  }

  @ApiOperation({
    summary: '获取',
  })
  @Get()
  findAll() {
    return this.subtitleService.find();
  }
}
