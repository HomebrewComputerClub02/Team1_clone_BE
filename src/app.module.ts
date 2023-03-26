import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './apis/users/user.entity';
import { UserModule } from './apis/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ModelModule } from './apis/model/model.module';
import { Model } from './apis/model/model.entity';
import { ModelCategoryModule } from './apis/modelCategory/modelCategory.module';
import { ModelCategory } from './apis/modelCategory/entities/modelCategory.entity';
import { HighlightModule } from './apis/menu/highlight/highlight.module';
import { Highlight } from './apis/menu/highlight/entities/highlight.entity';
import { HighlightDetailModule } from './apis/menu/highlight/detail/highlight_detail.module';
import { HighlightDetail } from './apis/menu/highlight/detail/highlight_detail.entity';
import { EcoModule } from './apis/menu/eco/eco.module';
import { Eco } from './apis/menu/eco/entities/eco.entity';
import { DesignModule } from './apis/menu/design/design.module';
import { Design } from './apis/menu/design/design.entity';
import { DesignDetail } from './apis/menu/design/detail/design_detail.entity';
import { DesignDetailModule } from './apis/menu/design/detail/design_detail.module';
import { Vr } from './apis/menu/vr/vr.entity';
import { VrDetail } from './apis/menu/vr/detail/vr_detail.entity';
import { Space } from './apis/menu/space/space.entity';
import { SpaceDetail } from './apis/menu/space/detail/space_detail.entity';
import { Convenience } from './apis/menu/convenience/convenience.entity';
import { ConvenienceDetail } from './apis/menu/convenience/detail/convenience_detail.entity';
import { Safety } from './apis/menu/safety/safety.entity';
import { SafetyDetail } from './apis/menu/safety/detail/safety_detail.entity';
import { Service } from './apis/menu/service/service.entity';
import { HStation } from './apis/menu/hStation/hStation.entity';
import { ServiceNetwork } from './apis/menu/serviceNetwork/serviceNetwork.entity';
import { VrModule } from './apis/menu/vr/vr.module';
import { VrDetailModule } from './apis/menu/vr/detail/vr_detail.module';
import { SpaceModule } from './apis/menu/space/space.module';
import { SpaceDetailModule } from './apis/menu/space/detail/space_detail.module';
import { ConvenienceModule } from './apis/menu/convenience/convenience.module';
import { ConvenienceDetailModule } from './apis/menu/convenience/detail/convenience_detail.module';
import { SafetyModule } from './apis/menu/safety/safety.module';
import { SafetyDetailModule } from './apis/menu/safety/detail/safety_detail.module';
import { ServiceModule } from './apis/menu/service/service.module';
import { HStationModule } from './apis/menu/hStation/hStation.module';
import { ServiceNetworkModule } from './apis/menu/serviceNetwork/serviceNetwork.module';
import { AuthModule } from './apis/auth/auth.module';
import { PhoneModule } from './apis/users/phone/phone.module';
import { PhoneToken } from './apis/users/phone/phoneToken.entity';
import { EmailModule } from './apis/users/email/email.module';
import { DesignDetailDetailModule } from './apis/menu/design/detail/detail_detail/design_detail_detail.module';
import { DesignDetailDetail } from './apis/menu/design/detail/detail_detail/design_detail_detail.entity';
import { SpaceDetailDetailModule } from './apis/menu/space/detail/detail_detail/space_detail_detail.module';
import { SpaceDetailDetail } from './apis/menu/space/detail/detail_detail/space_detail_detail.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
      context: ({ req, res }) => ({ req, res }),
    }),
    AuthModule,
    UserModule, //
    ModelModule,
    ModelCategoryModule,
    HighlightModule,
    HighlightDetailModule,
    EcoModule,
    DesignModule,
    DesignDetailModule,
    DesignDetailDetailModule,
    VrModule,
    VrDetailModule,
    SpaceModule,
    SpaceDetailModule,
    SpaceDetailDetailModule,
    ConvenienceModule,
    ConvenienceDetailModule,
    SafetyModule,
    SafetyDetailModule,
    ServiceModule,
    HStationModule,
    ServiceNetworkModule,
    PhoneModule,
    EmailModule,
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
        Eco,
        Design,
        DesignDetail,
        DesignDetailDetail,
        Vr,
        VrDetail,
        Space,
        SpaceDetail,
        SpaceDetailDetail,
        Convenience,
        ConvenienceDetail,
        Safety,
        SafetyDetail,
        Service,
        HStation,
        ServiceNetwork,
        PhoneToken,
      ],
      synchronize: true,
      // logging: true,
    }),
  ],
})
export class AppModule {}
