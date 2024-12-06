import { ApiProperty } from '@nestjs/swagger';
import { PasswordValidator } from '../validator/password';
import { UsernameValidator } from '../validator/username';
import { Validate } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'amir',
    required: true,
  })
  @Validate(UsernameValidator)
  username: string;

  @ApiProperty({
    example: 'Amir123@',
    required: true,
  })
  @Validate(PasswordValidator)
  password: string;
}
