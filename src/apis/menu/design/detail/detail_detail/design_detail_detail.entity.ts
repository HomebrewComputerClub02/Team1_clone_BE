import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DesignDetail } from '../design_detail.entity';

@Entity()
@ObjectType()
export class DesignDetailDetail {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  summary: string;

  @Column()
  @Field(() => String)
  img: string;

  @JoinColumn()
  @ManyToOne(() => DesignDetail)
  @Field(() => DesignDetail)
  designDetail: DesignDetail;
}
