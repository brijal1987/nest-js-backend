import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/posts (GET)', () => {
    return request(app.getHttpServer())
      .get('/posts')
      .expect(200);
  });

  it('/posts/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/posts/1')
      .expect(200);
  });

  it('/posts/100 (GET), give 404 Not found', () => {
    return request(app.getHttpServer())
      .get('/posts/100')
      .expect(404);
  });
});
