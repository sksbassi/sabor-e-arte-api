import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
//PartialType porque ele pode atualizar apenas alguns atributos e não
//obrigatoriamente todos os dados definidos no DTO