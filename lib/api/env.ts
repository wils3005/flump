import { config } from 'dotenv';
import { envSchema } from '../schemas/index';

config();

export const {
  FASTIFY_COOKIE_OPTIONS,
  FASTIFY_HTTP_OPTIONS,
  FASTIFY_LISTEN_OPTIONS,
  FASTIFY_OAUTH2_OPTIONS,
  FASTIFY_STATIC_OPTIONS,
} = envSchema.parse(process.env);
