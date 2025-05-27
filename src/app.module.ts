import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ReceitaModule } from './receita/receita.module';

@Module({
  imports: [UsuarioModule, ReceitaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
