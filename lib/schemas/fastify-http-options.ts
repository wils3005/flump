import { z } from 'zod';
import type { FastifyHttpOptions } from 'fastify';
import type { Server } from 'node:http';

export const fastifyHttpOptionsSchema: z.ZodType<FastifyHttpOptions<Server>> = z
  .object({})
  .passthrough();

