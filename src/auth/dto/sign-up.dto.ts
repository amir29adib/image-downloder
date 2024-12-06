import { Password } from 'src/user/model/password';
import { Username } from 'src/user/model/username';

export class SignUpUserDto {
  username: Username;
  password: Password;
}
