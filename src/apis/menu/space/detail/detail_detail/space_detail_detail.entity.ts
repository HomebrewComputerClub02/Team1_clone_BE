import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SpaceDetail } from '../space_detail.entity';

@Entity()
@ObjectType()
export class SpaceDetailDetail {
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
  @ManyToOne(() => SpaceDetail)
  @Field(() => SpaceDetail)
  spaceDetail: SpaceDetail;
}
