import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from 'src/dtos';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post("/local/signup")
    signup(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signup(dto);
    }

    @Post("/local/signin")
    signin(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signin(dto);
    }

    @Post("/logout")
    logout() {
        return this.authService.logout();
    }

    @Post("/refresh")
    refreshToken() {
        return this.authService.refreshToken()
    }
}
