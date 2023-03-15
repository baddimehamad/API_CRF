import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import passport from 'passport';
import { Repository,QueryBuilder,getConnection, createQueryBuilder, getManager } from 'typeorm';
import { User } from '../typeorm/user';


@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  public async findAll() {
    const entityManager = getManager();
    try {
        return  await entityManager.query("SELECT `id`, `username`, `email`, `role`, `active`, `nom`, `prenom` FROM `user` WHERE 1");
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
  public async findbyid(id: number) {
    const entityManager = getManager();
    try {
        return  await entityManager.query("SELECT `id`, `username`, `email`, `role`, `active`, `nom`, `prenom` FROM `user` WHERE id="+id);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
