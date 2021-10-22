import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSeguindoDto {
  @IsNotEmpty()
  idSeguindo: number; //quem eu vou seguir

  @IsNotEmpty()
  usuarioId: number; //meu id

  @IsOptional()
  QuemSegue: string;
}
