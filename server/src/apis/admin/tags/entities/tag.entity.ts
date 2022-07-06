import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 10,
    comment: '标签名',
  })
  name: string;

  @Column('int', {
    default: 1,
    comment: '权重',
  })
  weight: number;

  @Column({
    default: false,
    comment: '是否冻结',
  })
  freeze: boolean;

  @Column({
    default: false,
    comment: '是否删除',
  })
  del: boolean;

  @CreateDateColumn({
    comment: '创建时间',
  })
  created_at: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updated_at: Date;
}
