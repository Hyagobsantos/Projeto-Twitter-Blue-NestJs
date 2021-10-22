import { Tweet } from '.prisma/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Injectable()
export class TweetService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateTweetDto): Promise<Tweet> {
    let curtidasTot = 0;
    const busca = await this.prismaService.usuario.findUnique({
      where: {
        id: data.usuarioId,
      },
    });

    if (!busca) {
      throw new HttpException(
        {
          message: HttpStatus.NOT_FOUND,
          erro: 'Erro ao encontrar',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const registro = await this.prismaService.tweet.create({
      data: {
        ...data,
        curtidas: curtidasTot++,
        usuarioId: busca.id,
      },
    });

    return registro;
  }

  async deleteTweet(id: number): Promise<Tweet> {
    const buscado = await this.prismaService.tweet.findUnique({
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

    return this.prismaService.tweet.delete({ where: { id: buscado.id } });
  }
}
