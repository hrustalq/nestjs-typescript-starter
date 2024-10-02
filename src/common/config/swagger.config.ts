import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = {
  documentBuilder: new DocumentBuilder()
    .setTitle(process.env.SWAGGER_TITLE || 'API Documentation')
    .setDescription(
      process.env.SWAGGER_DESCRIPTION ||
        'API documentation for the application',
    )
    .setVersion(process.env.SWAGGER_VERSION || '1.0')
    .addTag(process.env.SWAGGER_TAG || 'API')
    .addBearerAuth()
    .build(),
  path: process.env.SWAGGER_PATH || '/api/docs',
};
