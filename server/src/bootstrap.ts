import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import type { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


function initSwagger(app: INestApplication, config: ConfigService) {
  const isOpenSwagger = config.get('swagger')
  if (!isOpenSwagger) {
    return false;
  }
  
  const options = new DocumentBuilder()
    .setTitle('留言墙文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  const swaggerPrefix = config.get('swaggerPrefix');
  SwaggerModule.setup(swaggerPrefix, app, document);
  console.log('swagger 文档前缀', swaggerPrefix);
}

export default function bootstrap(app: INestApplication) {
  const config = app.get(ConfigService);
  initSwagger(app, config);
}
