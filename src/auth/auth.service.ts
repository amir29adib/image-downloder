import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignUpUserDto } from './dto/sign-up.dto';
import { UserId } from 'src/user/model/user-id';
import { LoginUserDto } from './dto/login.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(dto: SignUpUserDto): Promise<UserId> {
    return this.userService.createUser({
      ...dto,
    });
  }
  async login(dto: LoginUserDto): Promise<{ access_token: string }> {
    const user = await this.userService.findUserByUsername(dto.username);
    if (user === null) {
      throw new NotFoundException(`User ${dto.username} not found`);
    }

    if (!(await compare(dto.password, user.password))) {
      throw new UnauthorizedException('Password is invalid');
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
