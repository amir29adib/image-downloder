import { UserId } from './user-id';
import { Username } from './username';

export interface User {
  id: UserId;
  username: Username;
  password: string;
}
