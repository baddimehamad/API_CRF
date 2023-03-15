import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    }),);
  app.use(passport.initialize());
  app.use(passport.session());*/
  app.enableCors({
    origin: "http://localhost:4200",
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
