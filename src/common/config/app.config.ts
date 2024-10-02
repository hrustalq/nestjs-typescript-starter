interface AppConfig {
  port: number;
  host: string;
  apiPrefix: string;
}

export const appConfig: AppConfig = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  host: process.env.HOST || '0.0.0.0',
  apiPrefix: process.env.API_PREFIX || '/api',
};
