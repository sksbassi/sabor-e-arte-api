import { IsEmail, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nome: string;
  @IsString()
  sobrenome: string;

  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  telefone: string;
  @IsString()
  senha: string;
}
