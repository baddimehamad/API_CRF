import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UtilisateurService],
  controllers: [UtilisateurController],
  exports:[UtilisateurService]
})
export class UtilisateurModule {}
