//encapsula o serviço prisma para permitir acesso em toda a aplicação
import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Global() //Define que será carregado para toda a aplicação
@Module({//registra o prismaservice como modulo disponível
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
