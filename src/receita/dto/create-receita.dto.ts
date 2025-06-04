import { IsNumber, IsString } from 'class-validator';

export class CreateReceitaDto {
  @IsString()
  imagem: string;
  @IsString()
  nome: string;
  ingredientes: string;
  @IsString()
  modoPreparo: string;
  @IsNumber()
  tempoPreparo: number;
  @IsString()
  classificao: string;
  @IsString()
  usuarioId: string;
}
