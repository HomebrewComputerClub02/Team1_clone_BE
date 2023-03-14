import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Safety } from '../safety.entity';

@Entity()
@ObjectType()
export class SafetyDetail {
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
  @ManyToOne(() => Safety)
  @Field(() => Safety)
  safety: Safety;
}
