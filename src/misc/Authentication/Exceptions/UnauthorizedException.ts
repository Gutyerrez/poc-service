import { Exception } from 'Exceptions/Exception';

export class UnauthorizedException extends Exception {
  constructor(
    message: string = 'access unauthorized',
    status: number = 403,
  ) { super(message, status); }
}
