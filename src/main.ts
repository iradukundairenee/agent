import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceConfig } from "../microserviceConfig";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(microserviceConfig);
  await app.startAllMicroservices();
  app.enableCors();
  const port = process.env.PORT;
  await app.listen(port);
  console.log(`AIRTEL SERVICE  IS RUNNINGON PORT ${port}`);
}
bootstrap();
