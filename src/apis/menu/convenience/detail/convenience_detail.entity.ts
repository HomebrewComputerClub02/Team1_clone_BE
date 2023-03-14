import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Convenience } from '../convenience.entity';

@Entity()
@ObjectType()
export class ConvenienceDetail {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  summary: string;

  @Column()
  @Field(() => String)
  img: string;

  @JoinColumn()
  @ManyToOne(() => Convenience)
  @Field(() => Convenience)
  convenience: Convenience;
}
