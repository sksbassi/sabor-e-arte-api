import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Injectable()
export class ReceitaService {
  constructor(private prisma: PrismaService) {}

  async create(createReceitaDto: CreateReceitaDto) {
    const receita = await this.prisma.receita.create({
      data: createReceitaDto,
    });
    return receita;
  }

  async findAll() {
    const listareceitas = await this.prisma.receita.findMany();
    return listareceitas;
  }

  async findOne(id: string) {
    const receita = await this.prisma.receita.findUnique({
      where: {
        id,
      },
    });
    return receita;
  }

  async update(id: string, updateReceitaDto: UpdateReceitaDto) {
    const novareceita = await this.prisma.receita.update({
      data: updateReceitaDto,
      where: {
        id,
      },
    });
    return updateReceitaDto;
  }

  async remove(id: string) {
    await this.prisma.receita.delete({
      where: {
        id,
      },
    });
  }
}
