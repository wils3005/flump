import { buildReactApp } from '../build-react-app';
import type { RouteOptions, RouteHandlerMethod } from 'fastify';

const handler: RouteHandlerMethod = async (request, reply) => {
  const { valid } = request.unsignCookie(request.cookies.session ?? '');

  if (valid) {
    reply
      .header('content-type', 'text/javascript')
      .send(await buildReactApp('authenticated.tsx'));
  } else {
    reply
      .clearCookie('session')
      .header('content-type', 'text/javascript')
      .send(await buildReactApp('unauthenticated.tsx'));
  }
};

export const mainRoute: RouteOptions = {
  handler,
  method: 'get',
  url: '/main.mjs',
};
