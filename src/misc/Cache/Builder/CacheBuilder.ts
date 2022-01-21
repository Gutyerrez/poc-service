import { LoadingCache } from 'Misc/Cache/LoadingCache';

export class CacheBuilder {
  static newBuider = <K, V>(): LoadingCache<K, V> => new LoadingCache<K, V>();
}
