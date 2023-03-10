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
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');

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
