import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './common/config/app.config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(appConfig.port, appConfig.host, () => {
    console.log(`Server is running on ${appConfig.host}:${appConfig.port}`);
  });
}
bootstrap();
