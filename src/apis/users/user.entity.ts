import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Model } from 'src/apis/model/model.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  phone: string;

  @Column()
  // @Field(() => String) 비밀번호 노출 금지 / api로 못받아보게
  password: string;

  @Column()
  //   @Field(() => String)
  simplePw: string;

  @ManyToMany(() => Model, (models) => models.users)
  @Field(() => [Model])
  models: Model[];

  // @ManyToMany(() => Model, (models) => models.users)
  // @Field(() => [Model])
  // models: Model[];
}
