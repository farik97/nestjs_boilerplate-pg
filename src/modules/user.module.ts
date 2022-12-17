import { UserUseCases } from './../use-cases/user.use-cases';
import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserUseCases]
})
export class UserModule {}
