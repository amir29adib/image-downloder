import { Brand } from 'src/utilities/data/brand';
import { isUuid, Uuid } from 'src/utilities/data/uuid';
import { z } from 'zod';

export type UserId = Brand<Uuid, 'UserId'>;

export const isUserId = (value: string): value is UserId => isUuid(value);

export const zodUserId = z.string().refine(isUserId);
