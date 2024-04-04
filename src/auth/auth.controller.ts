import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from 'src/dtos';
import { Tokens } from './types';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post("/local/signup")
    @HttpCode(HttpStatus.CREATED)
    signup(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signup(dto);
    }

    @Post("/local/signin")
    @HttpCode(HttpStatus.OK)
    signin(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signin(dto);
    }

    @UseGuards(AuthGuard("jwt"))
    @Post("/logout")
    @HttpCode(HttpStatus.OK)
    logout(@Req() req: Request) {
        const user = req.user;
        return this.authService.logout(user["id"]);
    }

    @UseGuards(AuthGuard("jwt-refresh"))
    @Post("/refresh")
    @HttpCode(HttpStatus.OK)
    refreshToken() {
        // return this.authService.refreshToken()
    }
}
