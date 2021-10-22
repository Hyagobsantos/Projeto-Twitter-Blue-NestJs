import { Prisma } from '.prisma/client';
import {
  IsString,
  Length,
  IsDate,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @Length(3, 50)
  nome: string;

  @IsString()
  @Length(3, 50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 30)
  senha: string;

  @IsString()
  @Length(3, 100)
  imagem: string;

  @IsNotEmpty()
  @IsString()
  bio: string;

  @IsString()
  @IsNotEmpty()
  nascimento: string;

  @IsDate()
  @IsOptional()
  criado_em: Date;

  @IsDate()
  @IsOptional()
  modificado_em: Date;

  @IsOptional()
  seguindo: Prisma.SeguindoCreateNestedManyWithoutUsuarioInput;
}
