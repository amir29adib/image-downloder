import { UUID as cryptoUUID } from 'crypto';
import { validate } from 'uuid';
import { z } from 'zod';
import { Brand } from './brand';

export type Uuid = Brand<cryptoUUID, 'UUID'>;

export const isUuid = (value: string): value is Uuid => validate(value);

export const zodUuid = z.string().refine(isUuid);
