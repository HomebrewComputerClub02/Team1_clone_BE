import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create({ email, name, phone, hashedPassword, hashedSimplePw }) {
    // 이메일 중복 체크
    const userEmail = await this.userRepository.findOne({ where: { email } });
    if (userEmail) throw new ConflictException('이미 등록된 이메일입니다.');

    // // 유저명 중복 체크
    // const userName = await this.userRepository.findOne({ where: { name } });
    // if (userName) throw new ConflictException('이미 있는 이름이다');

    // DB 등록
    const result = await this.userRepository.save({
      email,
      name,
      phone,
      password: hashedPassword,
      simplePw: hashedSimplePw,
    });
    return result;
  }
}
