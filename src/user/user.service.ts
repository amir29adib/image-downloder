import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from './model/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: CreateUserDto): Promise<boolean> {
    const existingUser = await this.findUserByUsername(dto.username);
    if (existingUser) {
      throw new ConflictException('Username is already existed');
    }

    const username = dto.username;
    const password = await bcrypt.hash(dto.password, 10);

    return (
      (await this.userRepository.create({ username, password })) !== undefined
    );
  }

  async findUserById(userId: string): Promise<User | null> {
    return await this.userRepository.findById(userId);
  }

  async findUserByUsername(username: string): Promise<User | null> {
    return await this.userRepository.findByUsername(username);
  }
}
