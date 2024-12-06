import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserId } from './model/user-id';
import { User } from './model/user';

export interface IUserRepository {
  create(user: CreateUserDto): Promise<User>;
  findById(id: UserId): Promise<User | null>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    return await this.repository.save(user);
  }

  async findById(id: UserId): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }
}
