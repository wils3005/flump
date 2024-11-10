import type { CookieSerializeOptions } from '@fastify/cookie';
import type { RouteOptions, RouteHandlerMethod } from 'fastify';

const handler: RouteHandlerMethod = async function (request, reply) {
  const {
    token: { access_token },
  } =
    await this.microsoftOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);

  reply
    .setCookie('session', access_token, cookieSerializeOptions)
    .redirect('/');
};

export const loginMicrosoftCallbackRoute: RouteOptions = {
  handler,
  method: 'get',
  url: '/login/microsoft/callback',
};

////////////////////////////////////////////////////////////////////////////////

const cookieSerializeOptions: CookieSerializeOptions = {
  httpOnly: true,
  maxAge: 43200,
  path: '/',
  sameSite: 'strict',
  secure: true,
  signed: true,
};
