import { z } from 'zod';
import type { FastifyOAuth2Options } from '@fastify/oauth2';

export const fastifyOauth2OptionsSchema: z.ZodType<FastifyOAuth2Options> = z
  .object({
    callbackUri: z.string(),
    credentials: z
      .object({
        client: z.object({ id: z.string(), secret: z.string() }).passthrough(),
      })
      .passthrough(),
    name: z.string(),
  })
  .passthrough();
