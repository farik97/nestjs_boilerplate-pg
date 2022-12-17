import { GetUserDto } from './../dtos/user.dto';
import { Request } from 'supertest';
import { UserUseCases } from './user.use-cases';

describe('Checking Use Cases Methods', async () => {
    let useCases: UserUseCases;
    let request: Request;

    it('It should be defined', () =>{
        expect(useCases).toBeDefined()
    })

    it('Check Get Users Use Case', async () => {
      let id = Math.floor(Math.random()*10);
      const response = useCases.getUser(id);
      expect(response).toBeInstanceOf(GetUserDto)
    })
})