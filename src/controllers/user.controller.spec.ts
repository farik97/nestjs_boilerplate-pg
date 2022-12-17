import { GetUserDto } from './../dtos/user.dto';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import * as request from 'supertest';

const endpoint = '/user';

describe('UserController', () => {
  let controller: UserController;
  let app: INestApplication;
  let adminToken = '123456';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/ GET', () => {
    test('should return expected response type when request empty', async () => {
      const response = await request(app.getHttpServer())
        .get(endpoint)
        .set('Authorization', `${adminToken}`);
      expect(response.body).toBeInstanceOf(GetUserDto);
    });
    test('should return status code 200 when request empty', async () => {
      const response = await request(app.getHttpServer())
        .get(endpoint)
        .set('Authorization', `${adminToken}`);
      expect(response.statusCode).toBe(200);
    });
    test('should return status code 200 when request empty', async () => {
      const response = await request(app.getHttpServer())
        .get(endpoint)
        .set('Authorization', `${adminToken}`);
      expect(response.statusCode).toBe(200);
    });
    test('should return status code 200 when request empty', async () => {
      const response = await request(app.getHttpServer())
        .get(endpoint)
        .set('Authorization', `${adminToken}`);
      expect(response.statusCode).toBe(200);
    });
    test('unauthorised request should return if no token has been sent', async () => {
      const response = await request(app.getHttpServer())
        .get(endpoint)
        .set('Authorization', `${adminToken}`);
      expect(response.statusCode).toBe(401)
    })
  });
});
