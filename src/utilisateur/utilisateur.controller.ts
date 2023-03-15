import { UtilisateurService } from './utilisateur.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/typeorm';
import {
  Controller,
  Put,
  Get,
  Body,
  Res,
  Param,
  UseGuards,
  HttpStatus,
  NotFoundException,
  Post,
  Patch,
  Delete
} from '@nestjs/common';
@UseGuards(AuthGuard('jwt'))
@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}
  @Get()
  findAll() {
    return this.utilisateurService.findAll();
  }
  @Get(':id')
  findbyid(@Param('id') id: number) {
    return this.utilisateurService.findbyid(id);
  }
}
