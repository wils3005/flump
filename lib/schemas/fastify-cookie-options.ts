import { z } from 'zod';
import type { FastifyCookieOptions } from '@fastify/cookie';

export const fastifyCookieOptionsSchema: z.ZodType<FastifyCookieOptions> = z
  .object({ secret: z.string() })
  .passthrough();
