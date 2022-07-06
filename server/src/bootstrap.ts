import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import type { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './filters/httpException.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { ValidationPipe } from './pipe/validate.pipe';

/** Swagger 配置 */
function initSwagger(app: INestApplication, config: ConfigService) {
  const isOpenSwagger = config.get('swagger');
  if (!isOpenSwagger) {
    return false;
  }

  const options = new DocumentBuilder().setTitle('留言墙文档').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, options);

  const swaggerPrefix = config.get('swaggerPrefix');
  SwaggerModule.setup(swaggerPrefix, app, document);
  console.log('swagger 文档前缀', swaggerPrefix);
}

/** App 配置 */
async function initAppConfig(app: INestApplication, config: ConfigService) {
  const globalPrefix = config.get('globalPrefix') || '/api';
  app.setGlobalPrefix(globalPrefix);
  console.log(` globalPrefix is ${globalPrefix}`);
}

/** 全局拦截器，管道，过滤器 */
function initGlobal(app: INestApplication) {
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());
}

export default async function bootstrap(app: INestApplication) {
  const config = app.get(ConfigService);
  initGlobal(app);
  await initAppConfig(app, config);
  initSwagger(app, config);
  const port = config.get('port') || 3006;
  await app.listen(port);
  console.log(`app listen in ${port}`);
}
