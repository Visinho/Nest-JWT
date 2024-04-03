import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from 'src/dtos';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post("/local/signup")
    signup(@Body() dto: AuthDto) {
        this.authService.signup(dto);
    }

    @Post("/local/signin")
    signin() {
        this.authService.signin();
    }

    @Post("/logout")
    logout() {
        this.authService.logout();
    }

    @Post("/refresh")
    refreshToken() {
        this.authService.refreshToken()
    }
}
