import { Password } from '../model/password';
import { Username } from '../model/username';

export class CreateUserDto {
  username: Username;
  password: Password;
}
