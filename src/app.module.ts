import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SeguindoModule } from './seguindo/seguindo.module';


@Module({
  imports: [UsuariosModule, SeguindoModule],
  
})
export class AppModule {}
