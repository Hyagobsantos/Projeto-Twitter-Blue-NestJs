import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { TweetModule } from './tweet/tweet.module';


@Module({
  imports: [UsuariosModule, SeguindoModule, TweetModule],
  
})
export class AppModule {}
