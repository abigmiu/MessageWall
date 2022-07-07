import { Injectable, BadRequestException } from '@nestjs/common';
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
    const haveSameName = await this.tagRepo.findOne({
      where: {
        name: createTagDto.name,
      },
    });

    if (haveSameName) {
      throw new BadRequestException('已有相同标签');
    }

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
    origin.freeze = !origin.freeze;
    await this.tagRepo.save(origin);
  }

  async findAll() {
    return await this.tagRepo.find({
      where: {
        del: false,
      },
    });
  }

  findPage() {
    return `This action returns page tags`;
  }

  findOne(id: number) {
    return this.tagRepo.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const origin = await this.tagRepo.findOne({
      where: {
        id,
      },
    });

    const keys = Object.keys(updateTagDto);
    const newObj = {
      ...origin,
    };
    keys.forEach((key) => {
      newObj[key] = updateTagDto[key];
    });

    this.tagRepo.save(newObj);
  }

  async remove(id: number) {
    const isExist = await this.tagRepo.findOne({
      where: {
        id,
        del: false,
      },
    });

    if (!isExist) {
      throw new BadRequestException('数据不存在');
    }

    isExist.del = true;
    this.tagRepo.save(isExist);
  }
}
