import { Brand } from 'src/utilities/data/brand';
import { z } from 'zod';

export type Password = Brand<string, 'Password'>;

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,50}$/;

export const isPassword = (value: string): value is Password => {
  return passwordPattern.test(value);
};

export const zodPassword = z.string().refine(isPassword);
