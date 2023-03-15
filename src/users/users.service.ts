import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import passport from 'passport';
import { Repository,QueryBuilder,getConnection, createQueryBuilder } from 'typeorm';
import { User } from '../typeorm/user';
import { UsersModule } from './users.module';

/*export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}*/

export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}
    /*private readonly users: User[] = [
      {
        id: 1,
        name: 'Marius',
        username: 'marius',
        password: 'sosecure',
      },
      {
        id: 2,
        name: 'Mambo',
        username: 'mambo',
        password: 'dumbo',
      },
    ];*/
    /*async findone (username: string): Promise<User | undefined> {
        return this.users.find(user => user.username ===username);
    }*/

    public async create(userDto: User): Promise<User> {
      try {
        return await this.usersRepository.save(userDto);
      } catch (err) {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }
    }
    findAll(): Promise<User[]> {
      return this.usersRepository.find();
    }
  
    findOne(username: string): Promise<User> {
      return this.usersRepository.findOne({ username });
    }

    findOneId(id: number): Promise<User> {
      return createQueryBuilder().select("user").from(User,"user").where("user.id = :id", { id: id }).getOne();
    }
  
    async remove(id: string): Promise<void> {
      await this.usersRepository.delete(id);
    }
  }
