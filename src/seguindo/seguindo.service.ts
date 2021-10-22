import { Prisma, Seguindo } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';


@Injectable()
export class SeguindoService {

  constructor(private prismaService: PrismaService){}

  create(data: Prisma.SeguindoCreateInput): Promise<Seguindo> {
    return 
  }

  findOne(id: number) {
    return `This action returns a #${id} seguindo`;
  }

}
