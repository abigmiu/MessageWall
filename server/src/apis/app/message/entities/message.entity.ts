import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class Message {
  @PrimaryGeneratedColumn({
    comment: 'id',
  })
  id: number;

  @Column({
    length: 510,
  })
  content: string;

  @Column({
    length: 12,
  })
  nickname: string;

  @Column({
    length: 7,
  })
  color: string;

  @Column()
  tagId: number;

  @Exclude()
  @Column({
    default: false,
  })
  del: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
