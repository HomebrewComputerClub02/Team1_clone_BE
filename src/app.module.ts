import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './apis/users/entities/user.entity';
import { UserModule } from './apis/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ModelModule } from './apis/model/model.module';
import { Model } from './apis/model/entities/model.entity';
import { ModelCategoryModule } from './apis/modelCategory/modelCategory.module';
import { ModelCategory } from './apis/modelCategory/entities/modelCategory.entity';
import { HighlightModule } from './apis/menu/highlight/highlight.module';
import { Highlight } from './apis/menu/highlight/entities/highlight.entity';
import { HighlightDetailModule } from './apis/menu/highlight/detail/highlight_detail.module';
import { HighlightDetail } from './apis/menu/highlight/detail/highlight_detail.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    UserModule, //
    ModelModule,
    ModelCategoryModule,
    HighlightModule,
    HighlightDetailModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'project1',
      entities: [
        User, //
        Model,
        ModelCategory,
        Highlight,
        HighlightDetail,
      ],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
