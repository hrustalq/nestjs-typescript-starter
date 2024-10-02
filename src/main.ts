import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './common/config/app.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import csurf from 'csurf';
import { swaggerConfig } from './common/config/swagger.config';
import { SwaggerModule } from '@nestjs/swagger';
import { csurfConfig } from './common/config/csurf.config';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /* Security */
  app
    .use(helmet())
    .use(cookieParser())
    .use(csurf({ cookie: csurfConfig }))
    .enableCors(appConfig.cors);

  app.setGlobalPrefix(appConfig.apiPrefix);

  /* Swagger */
  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig.documentBuilder,
  );
  SwaggerModule.setup(swaggerConfig.path, app, document);

  /* Start server */
  await app.listen(appConfig.port, appConfig.host, () => {
    console.log(
      `[App] Server is running on ${appConfig.host}:${appConfig.port}`,
    );
  });
}
bootstrap();
