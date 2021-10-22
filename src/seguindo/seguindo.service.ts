import { Prisma, Seguidores, Seguindo, Usuario } from '.prisma/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';

@Injectable()
export class SeguindoService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateSeguindoDto): Promise<Seguindo> {
    const userBuscado = await this.prismaService.usuario.findUnique({
      where: { id: data.idSeguindo },
    });

    const buscarid = await this.prismaService.seguindo.findUnique({
      where: { idSeguindo: data.idSeguindo },
    });

    if (buscarid) {
      throw new HttpException(
        {
          message: HttpStatus.BAD_REQUEST,
          erro: 'Já seguindo',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!userBuscado) {
      throw new HttpException(
        {
          message: HttpStatus.NOT_FOUND,
          erro: 'Usuario Não Existe, portanto não pode ser seguido',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    if (userBuscado.id) {
    }

    const criadoSeguindo = await this.prismaService.seguindo.create({
      data: {
        usuarioId: data.usuarioId,
        idSeguindo: userBuscado.id,
        quemSegue: userBuscado.nome,
      },
    });

    return criadoSeguindo;
  }

  async seguidor(usuarioId: number, idSeguindo: number): Promise<Seguidores> {
    const busca = await this.prismaService.usuario.findUnique({
      where: { id: usuarioId },
    });

    const novoRegistro = await this.prismaService.seguidores.create({
      data: {
        meSeguindo: busca.nome,
        idSeguidor: busca.id,
        usuarioId: idSeguindo 
      },
    });

    return novoRegistro;
  }

  async deletarSeguidor(id: number): Promise<Seguidores> {
    const buscarSeguidor = await this.prismaService.seguidores.findUnique({
      where: {id: id}
    });

    if (!buscarSeguidor) {
      throw new HttpException(
        {
          message: HttpStatus.NOT_FOUND,
          erro: 'Erro ao encontrar',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return this.prismaService.seguidores.delete({ where: { id: buscarSeguidor.id } });
  }

  async deleteSeguindo(id: number): Promise<Seguindo> {
    const buscado = await this.prismaService.seguindo.findUnique({
      where: { id: id },
    });

    if (!buscado) {
      throw new HttpException(
        {
          message: HttpStatus.NOT_FOUND,
          erro: 'Erro ao encontrar',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return this.prismaService.seguindo.delete({ where: { id: buscado.id } });
  }

  listartodas(): Promise<Seguindo[]> {
    return this.prismaService.seguindo.findMany();
  }
}
