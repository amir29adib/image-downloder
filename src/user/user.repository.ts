import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserId } from './model/user-id';
import { User } from './model/user';
import { Username } from './model/username';

export interface IUserRepository {
  create(user: { username: Username; password: string }): Promise<User>;
  findById(id: UserId): Promise<User | null>;
  findByUsername(username: Username): Promise<User | null>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(user: { username: Username; password: string }): Promise<User> {
    return await this.repository.save(user);
  }

  async findById(id: UserId): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  async findByUsername(username: Username): Promise<User | null> {
    return this.repository.findOneBy({ username });
  }
}
