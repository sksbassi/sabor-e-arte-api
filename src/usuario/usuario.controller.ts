//Controller são as classes que recebem as requuisições HTTP, define o método e se comunica com as services
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

    @Post('auth')//Rota específica de autenticação que foi usada para criar a função login
  async validarLogin(@Body() user: { email: string; senha: string }) {
    return this.usuarioService.findByEmail(user.email, user.senha);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  //Não é possível remover cadastro de usuários
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usuarioService.remove(id);
  // }
}
