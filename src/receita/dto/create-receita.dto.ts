import { Usuario } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

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
