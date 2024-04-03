import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/dtos';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt";
import { Tokens } from './types';

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService) {}

    hashData(data: string) {
        return bcrypt.hash(data, 10);
    }

    async signup(dto: AuthDto): Promise<Tokens> {
        const hash = await this.hashData(dto.password);
        const newUser = this.prismaService.user.create({
            data: {
                email: dto.email,
                hash
            }
        })
    }

    signin() {

    }

    logout() {

    }

    refreshToken() {

    }
}
