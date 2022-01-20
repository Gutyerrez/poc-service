import { FastifyRequest, FastifyReply } from 'fastify';

import { IRequestHandler } from 'Misc/Http/Protocols';

export interface IMiddleware extends IRequestHandler {
  handle: (
    request: FastifyRequest,
    response: FastifyReply,
  ) => Promise<void>;
}
