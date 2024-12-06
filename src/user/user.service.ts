import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { UserId } from './model/user-id';
import { User } from './model/user';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: CreateUserDto): Promise<boolean> {
    const newUser = this.userRepository.create(dto);
    return !!newUser;
  }

  async findUserById(userId: UserId): Promise<User | null> {
    return await this.userRepository.findById(userId);
  }
}
