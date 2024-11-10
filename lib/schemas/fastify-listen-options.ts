import { z } from 'zod';
import type { FastifyListenOptions } from 'fastify';

export const fastifyListenOptionsSchema: z.ZodType<FastifyListenOptions> = z
  .object({ port: z.number() })
  .passthrough();
