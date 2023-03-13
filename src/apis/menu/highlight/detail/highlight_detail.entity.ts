import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Highlight } from '../entities/highlight.entity';

@Entity()
@ObjectType()
export class HighlightDetail {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  img: string;

  @Column()
  @Field(() => String)
  description: string;

  @JoinColumn()
  @ManyToOne(() => Highlight)
  @Field(() => Highlight)
  highlight: Highlight;
}
