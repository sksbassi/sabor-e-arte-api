import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { ReceitaService } from './receita.service';

@Controller('receita')//rota da classe receita
export class ReceitaController {
  constructor(private readonly receitaService: ReceitaService) {}//Injeta as dependências

  @Post()//Método para cadastrar
  create(@Body() createReceitaDto: CreateReceitaDto) {//Anotation body para receber um corpo e recebe um
  //dto
    return this.receitaService.create(createReceitaDto);//retorna a criação usando o service, que é o que
    //comunica com o banco de dados
  }

  @Get()
  findAll() {
    return this.receitaService.findAll();
  }

  @Get('/com-usuario')//nova rota para uma consulta que retorna também os dados dos usuários
  findAllWithUsers() {
    return this.receitaService.findAllWithUsers();//função retorna todos os registros da entidade
    //incluindo os dados de usuário
  }

  @Get(':id')//nova rota para localizar receita pelo id 
  findOne(@Param('id') id: string){
    return this.receitaService.findOne(id);
  }

  @Patch(':id')//nova rota para atualizar pelo id
  update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    return this.receitaService.update(id, updateReceitaDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receitaService.remove(id);
  }
}
