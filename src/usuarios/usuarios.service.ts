import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, Usuario } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private prismaService: PrismaService) {}

  async buscarRegistro(nome: string): Promise<Usuario> {
    return this.prismaService.usuario.findUnique({ where: { nome } });
  }

  async buscarTodos(): Promise<Usuario[]>{
    return this.prismaService.usuario.findMany();
  }

  async criarUsuario(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    const registro = await this.buscarRegistro(data.nome);

    if (registro) {
      throw new HttpException(
        {
          message: HttpStatus.CONFLICT,
          erro: 'Registro já Cadastrado no banco',
        },
        HttpStatus.CONFLICT,
      );
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(data.senha, salt);

    const novoRegistro = await this.prismaService.usuario.create({
      data: {
        ...data,
        senha: hash,
      },
    });
    return novoRegistro;
  }

  async buscarRegistroUnico(nome: string): Promise<Usuario> {
    const buscado = await this.buscarRegistro(nome);

    if (!buscado) {
      throw new HttpException(
        {
          message: HttpStatus.NOT_FOUND,
          erro: 'Registro não Encontrado',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return buscado;
  }

  //falta Auterar e deletar
}
