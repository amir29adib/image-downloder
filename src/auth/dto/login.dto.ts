import { ApiProperty } from '@nestjs/swagger';
import { Validate } from 'class-validator';
import { PasswordValidator } from 'src/user/validator/password';
import { UsernameValidator } from 'src/user/validator/username';

export class LoginUserDto {
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
