import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/dtos';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService) {}

    signup(dto: AuthDto) {
    }

    signin() {

    }

    logout() {

    }

    refreshToken() {

    }
}
