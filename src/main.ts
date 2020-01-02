import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  const options = new DocumentBuilder()
    .setTitle('Server Documentation')
    .setDescription(' Server API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('apidocs', app, document);

  const configService: ConfigService = app.get(ConfigService);
  const port = configService.get<string>('port');

  await app.listen(port);
  Logger.log(`Server is running on http://localhost:${port}`);
}
bootstrap();
