//PORTA DE ENTRADA DA APLICAÇÃO NEST
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);//Crianda instância da aplicação Nest

  app.enableCors();//Permite que o backend aceite requisições de outros domínios diferentes 
  // (exemplo: um frontend rodando em localhost:3001 acessando o backend em localhost:3000).                

  const port = process.env.PORT ?? 3000;//DEFINE A PORTA
  //PORT senão porta 3000
  await app.listen(port, '0.0.0.0');//Inicia o servidor HTTP (0.0.0.0 significa que ele aceita
  //conexões externas e não somente o localhost)
}
bootstrap();

