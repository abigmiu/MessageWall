// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

export default {
  // 数据库
  db: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'blog',
    charset: 'utf8mb4',
    entities: [path.join(__dirname, '../db/**/*.entity{.js,.ts}')],
    synchronize: false,
  },
  redis: {
    hos: '127.0.0.1',
    port: 6379,
  },
  port: 3005, // 端口
  swagger: false,
  globalPrefix: '/api', // api 前缀
  swaggerPrefix: '/doc', // 文档前缀
};
