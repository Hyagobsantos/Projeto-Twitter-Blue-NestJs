import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';

@Controller('seguindo')
export class SeguindoController {
  constructor(private readonly seguindoService: SeguindoService) {}

  @Post()
  create(@Body() createSeguindoDto: CreateSeguindoDto) {
    return 0;
  }

  @Get()
  findAll() {
    return 0;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguindoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguindoDto: CreateSeguindoDto) {
    return 0
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 0
  }
}
