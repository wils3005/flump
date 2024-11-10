import type { RouteOptions, RouteHandlerMethod } from 'fastify';

const handler: RouteHandlerMethod = async function (request, reply) {
  const authorizationEndpoint =
    await this.microsoftOAuth2.generateAuthorizationUri(request, reply);

  reply.redirect(authorizationEndpoint);
};

export const loginMicrosoftRoute: RouteOptions = {
  handler,
  method: 'get',
  url: '/login/microsoft',
};
