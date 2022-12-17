import { UserDataAccess } from './../data-access/user.data-access';
import { User } from './../entity/User';
import { Injectable } from "@nestjs/common";
import { AppDataSource } from "../data-source";
import { GetUserDto } from "../dtos/user.dto";

@Injectable()
export class UserUseCases {
    constructor(
        private UserDataAccess: UserDataAccess
    ) {}

    async getUser(user_id: number) :Promise<GetUserDto> {
        return await this.UserDataAccess.getUser(user_id)
    }
}