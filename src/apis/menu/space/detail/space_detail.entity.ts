import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Space } from '../space.entity';

@Entity()
@ObjectType()
export class SpaceDetail {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  img: string;

  @JoinColumn()
  @ManyToOne(() => Space)
  @Field(() => Space)
  space: Space;
}
