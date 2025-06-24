import { IsEmail, IsString } from 'class-validator';
//Classe que defini os atributos obrigatórios para criar um usuário
//Transportar os dados entre as partes da aplicação
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
