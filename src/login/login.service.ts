import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Injectable()
export class LoginService {
  create(createLoginDto: CreateLoginDto) {
    return `This action adds a new login ${JSON.stringify(createLoginDto)}`;
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(name: string, age: number,) {
    return `This action updates a #${name}年 岁 ${age}login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
