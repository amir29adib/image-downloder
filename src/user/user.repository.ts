import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { User } from './model/user';
import { v4 as uuidv4 } from 'uuid';

export interface IUserRepository {
  create(user: { username: string; password: string }): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(user: { username: string; password: string }): Promise<User> {
    return await this.repository.save({ id: uuidv4(), ...user });
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.repository.findOneBy({ username });
  }
}
