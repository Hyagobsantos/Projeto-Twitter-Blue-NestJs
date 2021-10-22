import { IsOptional, IsString, Length } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @Length(0, 280)
  texto: string;

  @IsOptional()
  emoji: string;

  @IsOptional()
  usuarioId: number;

  @IsOptional()
  curtidas: number;
}
