import { IProvider } from 'Misc/Provider/IProvider';

import { IMiddleware } from 'Misc/Http/Middleware/IMiddleware';

export class MiddlewareProvider implements IProvider<IMiddleware> {
  private MiddlewareProvider!: new () => IMiddleware;

  private middleware!: IMiddleware;

  constructor(
    middleware: { new(): IMiddleware; },
  ) { this.MiddlewareProvider = middleware; }

  prepare = () => {
    this.middleware = new this.MiddlewareProvider();
  };

  provide = () => this.middleware;
}
