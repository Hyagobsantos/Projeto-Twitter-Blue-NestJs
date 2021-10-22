import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from '.prisma/client';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  buscarTodos() {
    return this.usuariosService.buscarTodos();
  }

  @Get(':nome')
  buscaRegistro(@Param('nome') nome: string): Promise<Usuario> {
    return this.usuariosService.buscarRegistroUnico(nome);
  }

  @Post()
  criarUsuario(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuariosService.criarUsuario(createUsuarioDto);
  }
}
