export interface ICache<K, V> {
  key: K;
  value: V;
  timer?: NodeJS.Timer;
}
