import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalAuthGuard } from './local-auth.guard';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
    imports: [UsersModule,PassportModule,JwtModule.register({
        secret:"smA!V#gJL&dxN1MZncr3HPvC9palD9etuMNRQ8lUFN6HKwZ46s",
        signOptions:{expiresIn:'1200s'},
    })],
    providers: [AuthService,LocalStrategy,LocalAuthGuard,JwtStrategy],
    exports:[AuthService]
})
export class AuthModule { }
