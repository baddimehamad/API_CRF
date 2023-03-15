import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "./typeorm/user";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Fournisseur, Station,Produit, License,Vignette, Ville,Historique } from './typeorm';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import { VignetteModule } from './vignette/vignette.module';
import { FactureModule } from './facture/facture.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api',
      entities:[Station,User,Fournisseur,Produit,License,Vignette,Ville,Historique],
      synchronize: true,
      migrationsRun:false
    }),
    UsersModule,
    AuthModule,
    FournisseurModule,
    VignetteModule,
    FactureModule,
    UtilisateurModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
