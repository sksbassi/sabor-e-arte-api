import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // ajuste conforme sua estrutura
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const novoUsuario = await this.prisma.usuario.create({
      data: createUsuarioDto,
    });
    return novoUsuario;
  }

  async findAll() {
    const usuario = await this.prisma.usuario.findMany();
    return usuario;
  }

  async findOne(id: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    return usuario;
  }

    async findByEmail(email:string) {
    const usuario = await this.prisma.usuario.findFirst({
      where: {
        email,
      },
    });
    return usuario;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const updateUsuario = await this.prisma.usuario.update({
      data: updateUsuarioDto,
      where: {
        id,
      },
    });
    return updateUsuarioDto;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} usuario`;
  // }
}
