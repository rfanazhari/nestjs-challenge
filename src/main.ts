import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ServerConfig } from '../config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const opt = new DocumentBuilder()
    .setTitle('Event Challenge REST API')
    .setDescription('for Event Challenge REST API')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, opt);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(ServerConfig.APP_PORT);
}
bootstrap();
