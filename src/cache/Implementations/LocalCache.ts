import { ICache } from 'Cache/ICache';

export abstract class LocalCache implements ICache {
  populate = () => {};
}
