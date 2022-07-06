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
    database: 'message-wall',
    charset: 'utf8mb4',
    entities: [path.join(__dirname, '../apis/**/*.entity{.js,.ts}')],
    synchronize: true,
  },
  redis: {
    hos: '127.0.0.1',
    port: 6379,
  },
  port: 3005, // 端口
  swagger: true,
  globalPrefix: '/api', // api 前缀
  swaggerPrefix: '/doc', // 文档前缀
};
