import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../typeorm/user';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,private jwtService:JwtService) { }
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user && user.password === password) {
            const { password, username, ...rest } = user;
            return user;
        }
        return null;
    }
    async login(user: any) {
        const payload = { name: user.name, sub: user.id };
        return {
            access_token:this.jwtService.sign(payload),
            user_id:user.id,
            nom:user.nom,
            prenom:user.prenom,
            role:user.role,
        }
    }
}
