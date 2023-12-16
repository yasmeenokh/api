import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  app.enableCors({
    origin: '*', // Update this to the specific origins you want to allow in production
    allowedHeaders: '*', // Update this to the specific allowed headers
    methods: 'GET,PUT,PATCH,POST,DELETE',
  });

  await app.listen(4000);
}

bootstrap();
