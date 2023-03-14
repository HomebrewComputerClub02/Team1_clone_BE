import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Vr } from '../vr.entity';

@Entity()
@ObjectType()
export class VrDetail {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  color_name: string;

  @Column()
  @Field(() => String)
  color_code: string;

  @JoinColumn()
  @ManyToOne(() => Vr)
  @Field(() => Vr)
  vr: Vr;
}
