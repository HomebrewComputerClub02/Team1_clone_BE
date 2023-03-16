import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './token.entity';
const coolsms = require('coolsms-node-sdk').default;

@Injectable()
export class PhoneService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}

  // 핸드폰 번호가 똑바로 온건지.
  checkValidation({ phone }) {
    if (phone.length !== 10 && phone.length !== 11) {
      console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!');
      return false;
    } else {
      return true; // 검증 통과
    }
  }

  // 여섯자리 랜덤한 숫자 (string)
  getToken() {
    const count = 6;
    const token = String(Math.floor(Math.random() * 10 ** count)).padStart(
      count,
      '0',
    );
    return token;
  }

  async sendTokenToSMS({ phone, token }) {
    // 문자 보내기
    const mysms = coolsms.default;
    const messageService = new coolsms(
      process.env.SMS_KEY,
      process.env.SMS_SECRET,
    );
    const result = await messageService.sendOne({
      to: phone,
      from: process.env.SMS_SENDER,
      text: `[휴대폰 인증] 요청하신 인증번호는 [${token}] 입니다.`,
    });

    // phone, token 값 저장해놓기
    // db 사용, 추후 캐시메모리로 바꿔보기
    // phone 같은거 있으면, 업데이트하고, 아니면 새로 만들기.
    const result_token = await this.tokenRepository.findOne({
      where: { phone },
    });

    if (result_token) {
      // db에 있는 기존 번호 토큰 업데이트
      const result = await this.tokenRepository.save({
        id: result_token.id,
        phone,
        token,
      });
    } else {
      // 새로운 번호 토큰 저장
      const result = await this.tokenRepository.save({
        phone,
        token,
      });
    }
  }

  async checkToken({ phone, token }) {
    const result_phone = await this.tokenRepository.findOne({
      where: { phone },
    });
    if (!result_phone) return '해당 휴대폰 토큰정보 없음.';
    if (result_phone.token === token) {
      return '인증 성공';
    } else if (result_phone.token !== token) {
      return '토큰 다름';
    }
  }
}
