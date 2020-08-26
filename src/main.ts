import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import * as path from 'path'
import { ConfigService } from '@nestjs/config';
import { config } from 'process';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('hbs');
  hbs.registerPartials(path.join(__dirname, '../views/partials'))
  await app.listen(3000);
  
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();
