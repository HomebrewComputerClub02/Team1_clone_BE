import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Convenience } from 'src/apis/menu/convenience/convenience.entity';
import { Design } from 'src/apis/menu/design/entities/design.entity';
import { Eco } from 'src/apis/menu/eco/entities/eco.entity';
import { Highlight } from 'src/apis/menu/highlight/entities/highlight.entity';
import { HStation } from 'src/apis/menu/hStation/hStation.entity';
import { Safety } from 'src/apis/menu/safety/safety.entity';
import { Service } from 'src/apis/menu/service/service.entity';
import { ServiceNetwork } from 'src/apis/menu/serviceNetwork/serviceNetwork.entity';
import { Space } from 'src/apis/menu/space/space.entity';
import { Vr } from 'src/apis/menu/vr/vr.entity';
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
  description: string; //

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => String)
  main_img: string;

  @ManyToOne(() => ModelCategory)
  @Field(() => ModelCategory)
  modelCategory: ModelCategory;

  @JoinColumn()
  @OneToOne(() => Highlight)
  @Field(() => Highlight)
  highlight: Highlight;

  @JoinColumn()
  @OneToOne(() => Eco)
  @Field(() => Eco)
  eco: Eco;

  @JoinColumn()
  @OneToOne(() => Design)
  @Field(() => Design)
  design: Design;

  @Field(() => Vr)
  @OneToOne(() => Vr)
  @Field(() => Vr)
  vr: Vr;

  @Field(() => Space)
  @OneToOne(() => Space)
  @Field(() => Space)
  space: Space;

  @Field(() => Convenience)
  @OneToOne(() => Convenience)
  @Field(() => Convenience)
  convenience: Convenience;

  @Field(() => Safety)
  @OneToOne(() => Safety)
  @Field(() => Safety)
  safety: Safety;

  // 얘가 문제 뜸. 뭐지.
  @Field(() => Service)
  @OneToOne(() => Service)
  @Field(() => Service)
  service: Service;

  @Field(() => HStation)
  @OneToOne(() => HStation)
  @Field(() => HStation)
  hStation: HStation;

  @Field(() => ServiceNetwork)
  @OneToOne(() => ServiceNetwork)
  @Field(() => ServiceNetwork)
  serviceNetwork: ServiceNetwork;

  // @JoinTable()
  // @ManyToMany(() => User, (users) => users.models)
  // @Field(() => [User])
  // users: User[];
}
