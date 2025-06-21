import { Usuario } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';
//Classe que defini os atributos obrigatórios para criar uma receita
//Transportar os dados entre as partes da aplicação
export class CreateReceitaDto {
  @IsString()
  nome: string;
  @IsString()
  ingredientes: string;
  @IsString()
  modoPreparo: string;
  @IsNumber()
  tempoPreparo: number;
  @IsString()
  classificacao: string;
  @IsString()
  usuarioId: string;
}
