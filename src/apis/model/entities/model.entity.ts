import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Highlight } from 'src/apis/menu/highlight/entities/highlight.entity';
import { ModelCategory } from 'src/apis/modelCategory/entities/modelCategory.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Model {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name_ko: string;

  @Column()
  @Field(() => String)
  name_en: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => String)
  main_img: string;

  @JoinColumn()
  @OneToOne(() => Highlight)
  @Field(() => Highlight)
  highlight: Highlight;

  @ManyToOne(() => ModelCategory)
  @Field(() => ModelCategory)
  modelCategory: ModelCategory;

  // @JoinTable()
  // @ManyToMany(() => User, (users) => users.models)
  // @Field(() => [User])
  // users: User[];
}
