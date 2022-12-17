import { GetUserDto } from '../dtos/user.dto';
import { UserUseCases } from '../use-cases/user.use-cases';
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(
        private UserUseCases: UserUseCases
    ) {}

    @UseGuards()
    @Get()
    async getUser(user_id: number) :Promise<GetUserDto> {
        return await this.UserUseCases.getUser(user_id)
    }
}