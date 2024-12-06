import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignUpUserDto } from './dto/sign-up.dto';
import { LoginUserDto } from './dto/login.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { jwtConstants } from './constants';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden!' })
  @ApiResponse({ status: 409, description: 'Username is already existed!' })
  @ApiBody({
    type: CreateUserDto,
    description: 'Json structure for signup object',
  })
  async signUpUser(@Body() signUpUserDto: SignUpUserDto): Promise<{
    status: 201;
    description: string;
  }> {
    if ((await this.authService.signup(signUpUserDto)) === true) {
      return {
        status: 201,
        description: 'The user has been successfully created.',
      };
    }

    throw new InternalServerErrorException();
  }

  @Post('login')
  @ApiResponse({ status: 201 })
  @ApiResponse({ status: 404, description: 'User is not found' })
  @ApiResponse({ status: 401, description: 'Password is invalid' })
  @ApiBody({
    type: LoginUserDto,
    description: 'Json structure for login object',
  })
  async loginUser(@Body() loginUserDto: LoginUserDto): Promise<{
    status: 201;
    access_token: string;
  }> {
    return { status: 201, ...(await this.authService.login(loginUserDto)) };
  }
}
