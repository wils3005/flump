import { fastifyCookieOptionsSchema } from './fastify-cookie-options';
import { fastifyHttpOptionsSchema } from './fastify-http-options';
import { fastifyListenOptionsSchema } from './fastify-listen-options';
import { fastifyOauth2OptionsSchema } from './fastify-oauth2-options';
import { fastifyStaticOptionsSchema } from './fastify-static-options';
import { z } from 'zod';

export const envSchema = z.object({
  FASTIFY_COOKIE_OPTIONS: z
    .string()
    .transform((x) => JSON.parse(x))
    .transform((x) => fastifyCookieOptionsSchema.parse(x)),
  FASTIFY_HTTP_OPTIONS: z
    .string()
    .transform((x) => JSON.parse(x))
    .transform((x) => fastifyHttpOptionsSchema.parse(x)),
  FASTIFY_LISTEN_OPTIONS: z
    .string()
    .transform((x) => JSON.parse(x))
    .transform((x) => fastifyListenOptionsSchema.parse(x)),
  FASTIFY_OAUTH2_OPTIONS: z
    .string()
    .transform((x) => JSON.parse(x))
    .transform((x) => fastifyOauth2OptionsSchema.parse(x)),
  FASTIFY_STATIC_OPTIONS: z
    .string()
    .transform((x) => JSON.parse(x))
    .transform((x) => fastifyStaticOptionsSchema.parse(x)),
});
