//Classe usada para integrar o prisma client com o ciclo de vida do Nestjs
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable() // Injeta as dependências do prisma
export class PrismaService  
  extends PrismaClient 
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect(); //Método para iniciar a conexão com o banco de dados
  }

  async onModuleDestroy() {
    await this.$disconnect(); //Encerra a conexão com o banco de dados
  }
}
