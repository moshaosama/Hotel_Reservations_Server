import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { LoginDTO, SignUpDTO } from './dto/create-auth.dto';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(user) private userRepository: Repository<user>,
  ) {}

  async SignUp(user: SignUpDTO) {
    if (!user) {
      throw new NotFoundException('Data is required');
    }

    user.Password = await bcrypt.hash(user.Password, 12);

    const newUser = this.userRepository.create({
      userName: user.userName,
      Password: user.Password,
      Email: user.Email,
    });

    return this.userRepository.save(newUser);
  }

  async Login(user: LoginDTO) {
    if (!user) {
      throw new NotFoundException('Data is required');
    }

    const findUser = await this.userRepository.findOne({
      where: { Email: user.Email },
    });

    if (!findUser) {
      throw new NotFoundException('Not found user by this email');
    }

    if (!(await bcrypt.compare(user.Password, findUser.Password))) {
      throw new NotFoundException('Password is not correct');
    }

    const token = jwt.sign(
      { id: findUser.id, Email: findUser.Email },
      process.env.JWT_SECRET || 'my-secret-key',
      { expiresIn: '1h' },
    );

    return {
      findUser,
      token,
    };
  }
}
