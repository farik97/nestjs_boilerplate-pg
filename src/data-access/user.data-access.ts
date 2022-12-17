import { User } from './../entity/User';
import { Injectable, Logger } from "@nestjs/common";
import { AppDataSource } from "../data-source";
import { GetUserDto } from "../dtos/user.dto";

@Injectable()
export class UserDataAccess {
    constructor() {}

    async getUser(user_id: number) :Promise<GetUserDto> {
        try {
            const user = await AppDataSource
            .getRepository(User)
            .createQueryBuilder("user")
            .where("user.id = :id", { id: user_id })
            .getOne()
            return user;
        } catch(e) {
            Logger.log(e)
            throw new Error("Error happened: 1201")
        }
        
    }
}