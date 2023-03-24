import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Convenience } from '../menu/convenience/convenience.entity';
import { ConvenienceDetail } from '../menu/convenience/detail/convenience_detail.entity';
import { DesignDetail } from '../menu/design/detail/design_detail.entity';
import { Design } from '../menu/design/design.entity';
import { Eco } from '../menu/eco/entities/eco.entity';
import { HighlightDetail } from '../menu/highlight/detail/highlight_detail.entity';
import { Highlight } from '../menu/highlight/entities/highlight.entity';
import { HStation } from '../menu/hStation/hStation.entity';
import { SafetyDetail } from '../menu/safety/detail/safety_detail.entity';
import { Safety } from '../menu/safety/safety.entity';
import { Service } from '../menu/service/service.entity';
import { ServiceNetwork } from '../menu/serviceNetwork/serviceNetwork.entity';
import { SpaceDetail } from '../menu/space/detail/space_detail.entity';
import { Space } from '../menu/space/space.entity';
import { VrDetail } from '../menu/vr/detail/vr_detail.entity';
import { Vr } from '../menu/vr/vr.entity';
import { ModelCategory } from '../modelCategory/entities/modelCategory.entity';
import { User } from '../users/entities/user.entity';
import { Model } from './entities/model.entity';
import { DesignDetailDetail } from '../menu/design/detail/detail_detail/design_detail_detail.entity';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,

    @InjectRepository(ModelCategory)
    private readonly modelCategoryRepository: Repository<ModelCategory>,

    @InjectRepository(Highlight)
    private readonly highlightRepository: Repository<Highlight>,

    @InjectRepository(Eco)
    private readonly ecoRepository: Repository<Eco>,

    @InjectRepository(Design)
    private readonly designRepository: Repository<Design>,

    @InjectRepository(Vr)
    private readonly vrRepository: Repository<Vr>,

    @InjectRepository(Space)
    private readonly spaceRepository: Repository<Space>,

    @InjectRepository(Convenience)
    private readonly convenienceRepository: Repository<Convenience>,

    @InjectRepository(Safety)
    private readonly safetyRepository: Repository<Safety>,

    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,

    @InjectRepository(HStation)
    private readonly hStationRepository: Repository<HStation>,

    @InjectRepository(ServiceNetwork)
    private readonly serviceNetworkRepository: Repository<ServiceNetwork>,

    @InjectRepository(HighlightDetail)
    private readonly highlightDetailRepository: Repository<HighlightDetail>,

    @InjectRepository(DesignDetail)
    private readonly designDetailRepository: Repository<DesignDetail>,

    @InjectRepository(DesignDetailDetail)
    private readonly designDetailDetailRepository: Repository<DesignDetailDetail>,

    @InjectRepository(VrDetail)
    private readonly vrDetailRepository: Repository<VrDetail>,

    @InjectRepository(SpaceDetail)
    private readonly spaceDetailRepository: Repository<SpaceDetail>,

    @InjectRepository(ConvenienceDetail)
    private readonly convenienceDetailRepository: Repository<ConvenienceDetail>,

    @InjectRepository(SafetyDetail)
    private readonly safetyDetailRepository: Repository<SafetyDetail>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // ----------------------------------------
  // fetchModel
  async findAll() {
    return await this.modelRepository.find({
      relations: [
        'modelCategory',
        'highlight',
        'eco',
        'design',
        'vr',
        'space',
        'convenience',
        'safety',
        'service',
        'hStation',
        'serviceNetwork',
      ], // 어떤 테이블 조인해올지 쓰면됨.
    });
  }

  // ----------------------------------------
  // fetchModel
  async findOne({ modelId }) {
    const result_model = await this.modelRepository.findOne({
      where: { id: modelId },
      relations: [
        'modelCategory',
        'highlight',
        'eco',
        'design',
        'vr',
        'space',
        'convenience',
        'safety',
        'service',
        'hStation',
        'serviceNetwork',
      ], // 어떤 테이블 조인해올지 쓰면됨.
    });

    // highlight 디테일
    const highlight_id = result_model.highlight.id;
    const highlightDetails = await this.highlightDetailRepository.find({
      where: { highlight: { id: highlight_id } },
    });

    // design 디테일
    const design_id = result_model.design.id;
    const designDetails = await this.designDetailRepository.find({
      where: { design: { id: design_id } },
      relations: ['design'],
    });

    // design 디테일 디테일
    // console.log(designDetails);
    let designDetailDetails = [];
    designDetails.forEach(async (designDetail) => {
      const designDetailDetail = await this.designDetailDetailRepository.find({
        where: { designDetail: { id: designDetail.id } },
        relations: ['designDetail'],
      });
      designDetailDetails.push(designDetailDetail);
    });

    // vr 디테일
    const vr_id = result_model.vr.id;
    const vrDetails = await this.vrDetailRepository.find({
      where: { vr: { id: vr_id } },
    });

    // space 디테일
    const space_id = result_model.space.id;
    const spaceDetails = await this.spaceDetailRepository.find({
      where: { space: { id: space_id } },
    });

    // convenience 디테일
    const convenience_id = result_model.convenience.id;
    const convenienceDetails = await this.convenienceDetailRepository.find({
      where: { convenience: { id: convenience_id } },
    });

    // safety 디테일
    const safety_id = result_model.safety.id;
    const safetyDetails = await this.safetyDetailRepository.find({
      where: { safety: { id: safety_id } },
    });

    // console.log('designDetails : ', designDetails);
    // console.log('designDetailDetails : ', designDetailDetails);

    console.log('desginDetailDetails : ', designDetailDetails);

    const result_final = {
      ...result_model,
      highlightDetails,
      designDetails,
      designDetailDetails,
      vrDetails,
      spaceDetails,
      convenienceDetails,
      safetyDetails,
    };

    return result_final;
  }

  // ----------------------------------------
  // createModel
  async create({ createModelInput }) {
    const {
      modelCategoryName,
      highlight,
      eco,
      design,
      vr,
      space,
      convenience,
      safety,
      service,
      hStation,
      serviceNetwork,
      ...model
    } = createModelInput;

    // 모델카테고리 테이블에 저장
    // id 말고 이름으로 받고싶어서 id 찾는 로직 추가
    let result_modelCategory = await this.modelCategoryRepository.findOne({
      where: { name: modelCategoryName },
    });

    // result에는 name뿐만 아니라 id도 담겨있게 됨.
    if (!result_modelCategory) {
      result_modelCategory = await this.modelCategoryRepository.save({
        name: modelCategoryName,
      });
    }

    // 하이라이트
    const result_highlight = await this.highlightRepository.save({
      summary: highlight.summary,
    });

    const result_highlightDetail = await this.highlightDetailRepository.find({
      where: { id: result_highlight.id },
    });

    // 에코
    const result_eco = await this.ecoRepository.save({
      summary: eco.summary,
      img: eco.img,
    });

    // 디자인
    const result_design = await this.designRepository.save({
      summary: design.summary,
      img: design.img,
    });

    // Vr
    const result_vr = await this.vrRepository.save({
      img: vr.img,
    });

    // Vr
    const result_space = await this.spaceRepository.save({
      summary: space.summary,
      img: space.img,
    });

    const result_convenience = await this.convenienceRepository.save({
      summary: convenience.summary,
      img: convenience.img,
    });

    const result_safety = await this.safetyRepository.save({
      summary: safety.summary,
      img: safety.img,
    });

    const result_service = await this.serviceRepository.save({
      summary: service.summary,
      img: service.img,
    });

    const result_hStation = await this.hStationRepository.save({
      summary: hStation.summary,
      img: hStation.img,
    });

    const result_serviceNetwork = await this.serviceNetworkRepository.save({
      summary: serviceNetwork.summary,
      img: serviceNetwork.img,
    });

    // 모델 테이블에 저장
    const result2 = await this.modelRepository.save({
      ...model,
      modelCategory: result_modelCategory,
      highlight: result_highlight,
      eco: result_eco,
      design: result_design,
      vr: result_vr,
      space: result_space,
      convenience: result_convenience,
      safety: result_safety,
      service: result_service,
      hStation: result_hStation,
      serviceNetwork: result_serviceNetwork,
    });

    return result2;
  }

  // async create({ createModelInput }) {
  //   // 1. 상품만 등록하는 경우
  //   // const result = await this.productRepository.save({
  //   //   ...createModelInput,
  //   //   // name: createModelInput.name,
  //   //   // description: createModelInput.description,
  //   //   // price:createModelInput.price
  //   // });

  //   // 2. 상품과 상품거래위치 같이 등록
  //   // 상품 주소 테이블에 먼저 저장하고,
  //   // 상품에다가 한번에 다 박아.
  //   const { users, ...model } = createModelInput;

  //   // users = ["손채환", "이주승", "정혜인"]
  //   const result_username = [];
  //   for (let i = 0; i < users.length; i++) {
  //     const username = users[i];

  //     // 이미 등록된 유저명인지 확인
  //     const prevName = await this.userRepository.findOne({
  //       where: { name: username },
  //     });

  //     // 기존에 태그가 있었다면
  //     if (prevName) {
  //       result_username.push(prevName);
  //     } else {
  //       const newUsername = await this.userRepository.save({
  //         name: username,
  //       });
  //       result_username.push(newUsername);
  //     }
  //   }

  //   const result = await this.modelRepository.save({
  //     ...model,
  //     users: result_username,
  //   });

  //   return result;
  // }
}

// // 하이라이트 디테일
// // hightlight.detail = [{name, img, des},{name, img, des}]
// const result_highlightDetail = [];
// for (let i = 0; i < highlight.detail.length; i++) {
//   const detail = highlight.detail[i];
//   console.log('detail : ', detail);
//   const detail2 = await this.highlightDetailRepository.save({
//     name: detail.name,
//     img: detail.img,
//     description: detail.description,
//     highlight: { id: result_highlight.id },
//   });
//   console.log('detail2 : ', detail2);
//   result_highlightDetail.push(detail2);
//   console.log('result_highlightDetail : ', result_highlightDetail);
// }
