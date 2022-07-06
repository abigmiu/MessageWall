import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminTagsService {
  constructor(
    @InjectRepository(Tag)
    private tagRepo: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    const tag = new Tag();
    tag.name = createTagDto.name;
    tag.weight = createTagDto.weight;
    const res = await this.tagRepo.save(tag);
    return res;
  }

  async freeze(id: number) {
    const origin = await this.tagRepo.findOne({
      where: {
        id,
      },
    });
    this.tagRepo.update()
    console.log(origin);
  }

  findAll() {
    return `This action returns all tags`;
  }

  findPage() {
    return `This action returns page tags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const origin = await this.tagRepo.findOne({
      where: {
        id,
      },
    });
    console.log(origin);
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
