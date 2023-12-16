import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  app.enableCors({
    origin: [
      'https://api-oo2i5mgod-yasmeenokh.vercel.app',
      'http://localhost:3000',
      '*',
    ], // Update this to the specific origins you want to allow in production
    // allowedHeaders: '*', // Update this to the specific allowed headers
    methods: 'GET,PUT,PATCH,POST,DELETE',
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Authentication, Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma',
  });

  await app.listen(4000);
}

bootstrap();
