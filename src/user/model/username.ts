import { Brand } from 'src/utilities/data/brand';
import { z } from 'zod';

export type Username = Brand<string, 'Username'>;

export const isUsername = (value: string): value is Username => {
  const usernamePattern = /^[A-Za-z0-9]{3,30}$/;
  return usernamePattern.test(value);
};

export const zodUsername = z.string().refine(isUsername);
