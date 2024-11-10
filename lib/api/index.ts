import {
  FASTIFY_COOKIE_OPTIONS,
  FASTIFY_HTTP_OPTIONS,
  FASTIFY_OAUTH2_OPTIONS,
  FASTIFY_STATIC_OPTIONS,
} from './env';
import {
  loginMicrosoftCallbackRoute,
  loginMicrosoftRoute,
  mainRoute,
} from './routes/index';
import fastify from 'fastify';
import fastifyCookie from '@fastify/cookie';
import fastifyOauth2, { OAuth2Namespace } from '@fastify/oauth2';
import fastifyStatic from '@fastify/static';

export const fastifyInstance = fastify(FASTIFY_HTTP_OPTIONS)
  .register(fastifyCookie, FASTIFY_COOKIE_OPTIONS)
  .register(fastifyOauth2, FASTIFY_OAUTH2_OPTIONS)
  .register(fastifyStatic, FASTIFY_STATIC_OPTIONS)
  .route(loginMicrosoftRoute)
  .route(loginMicrosoftCallbackRoute)
  .route(mainRoute);

declare module 'fastify' {
  interface FastifyInstance {
    microsoftOAuth2: OAuth2Namespace;
  }
}
