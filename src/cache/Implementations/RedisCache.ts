import { ICache } from 'Cache/ICache';

export abstract class RedisCache implements ICache {
  populate = () => {};
}
