import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSeguindoDto {
  @IsNotEmpty()
  idSeguidor: number;

  @IsNotEmpty()
  usuarioId: number;
}
