import { z } from 'zod';
import type { FastifyStaticOptions } from '@fastify/static';

export const fastifyStaticOptionsSchema: z.ZodType<FastifyStaticOptions> = z
  .object({ root: z.string() })
  .passthrough();
