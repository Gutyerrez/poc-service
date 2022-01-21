import { IProvider } from 'Misc/Provider/IProvider';

import { ICache } from 'Cache/ICache';

export class CacheProvider<T extends ICache> implements IProvider<T> {
  private cache!: T;

  constructor(
    cache: T,
  ) { this.cache = cache; }

  prepare = () => this.cache.populate();

  provide = () => this.cache;
}
