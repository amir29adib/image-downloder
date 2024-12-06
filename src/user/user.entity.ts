import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserId } from './model/user-id';
import { Username } from './model/username';
import { Password } from './model/password';

@Entity('users')
export class UserEntity {
  @PrimaryColumn('uuid')
  id!: UserId;

  @Column({ unique: true })
  username!: Username;

  @Column()
  password!: Password;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
