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
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { AuthGuard } from '@nestjs/passport';
  import { User } from '../typeorm/user';
@UseGuards(AuthGuard('jwt'))

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get('/:userId')
    public async getUser(
      @Res() res,
      @Param('userId') userId: number,
    ): Promise<number> {
      const user = await this.usersService.findOneId(userId);
  
      if (!user) {
        throw new NotFoundException('User does not exist!');
      }
  
      return res.status(HttpStatus.OK).json({
        user: user,
        status: 200,
      });
    }

    @Post('/adduser')
    public async adduser(
      @Res() res,
      @Body() registerUser: User,
    ): Promise<number> {
      const user = await this.usersService.create(registerUser);
  
      if (!user) {
        throw new NotFoundException('User erreur add!');
      }
  
      return res.status(HttpStatus.OK).json({
        user: user,
        status: 200,
      });
    }
}