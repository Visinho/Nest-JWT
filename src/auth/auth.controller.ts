import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from 'src/dtos';
import { Tokens } from './types';
import { AuthGuard } from '@nestjs/passport';
import { AtGuard, RtGuard } from 'src/common/guards';
import { GetCurrentUser, GetCurrentUserID, Public } from 'src/common/decorators';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Public()
    @Post("/local/signup")
    @HttpCode(HttpStatus.CREATED)
    signup(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signup(dto);
    }

    @Public()
    @Post("/local/signin")
    @HttpCode(HttpStatus.OK)
    signin(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signin(dto);
    }

    // @UseGuards(AtGuard)
    @Post("/logout")
    @HttpCode(HttpStatus.OK)
    logout(@GetCurrentUserID() userId: number) {
        return this.authService.logout(userId);
    }

    @Public()
    @UseGuards(RtGuard)
    @Post("/refresh")
    @HttpCode(HttpStatus.OK)
    refreshToken(@GetCurrentUser("refreshToken") refreshToken: string, @GetCurrentUserID() userId: number) {
        return this.authService.refreshToken(userId, refreshToken)
    }
}
