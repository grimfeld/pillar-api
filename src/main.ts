import { ConfigService } from './config/config.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const config = new ConfigService();
  const app = await NestFactory.create(AppModule);
  await app.listen(await config.getPortConfig());
}
bootstrap();
