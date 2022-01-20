import { FastifyRequest, FastifyReply } from 'fastify';

import { verify } from 'jsonwebtoken';

import { Env } from 'Misc/Env/Env';

import { IMiddleware } from 'Misc/Http/Middleware/IMiddleware';

import { UnauthorizedException } from 'Misc/Authentication/Exceptions/UnauthorizedException';

export class AuthenticationMiddleware implements IMiddleware {
  public handle = (
    request: FastifyRequest,
    _response: FastifyReply,
  ): any => {
    const { authorization } = request.headers;

    if (!authorization) {
      throw new UnauthorizedException();
    }

    const [ tokenType, tokenValue ] = authorization.split(' ');

    if (tokenType !== 'Bearer' || !verify(tokenValue, Env.getString('JWT_SECRET'))) {
      throw new UnauthorizedException();
    }
  };
}
