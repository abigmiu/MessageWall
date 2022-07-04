import Redis from 'ioredis';
import { } from 'ioredis';

export let redisInstance = null;

export function initRedis(config) {
  const res = new Redis(config);
  return redisInstance;
}
