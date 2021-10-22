import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { Seguidores, Seguindo } from '.prisma/client';

@Controller('seguindo')
export class SeguindoController {
  constructor(private readonly seguindoService: SeguindoService) {}

  @Get()
  listartudo(): Promise<Seguindo[]> {
    return this.seguindoService.listartodas();
  }

  @Post()
  create(@Body() createSeguindoDto: CreateSeguindoDto): Promise<Seguindo> {
    this.seguindoService.seguidor(
      createSeguindoDto.usuarioId,
      createSeguindoDto.idSeguindo,
    );

    console.log(createSeguindoDto.idSeguindo);
    return this.seguindoService.create(createSeguindoDto);
  }

  @Delete(':id')
  deletarSeguidor(@Param('id') id: string): Promise<Seguindo> {
    return this.seguindoService.deleteSeguindo(+id);
  }

  @Delete('seguidor/:id') //deixa de seguir um usuario
  deleteSeguindo(@Param('id') id: string): Promise<Seguidores> {
    return this.seguindoService.deletarSeguidor(+id);
  }

}
