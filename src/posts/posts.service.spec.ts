import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all posts', async () => {
    const posts = await service.getPosts();

    expect(posts.length).toBeGreaterThan(0);
  });

  it('should get specific post by id=1', async () => {
    const id = 1;
    const result = await service.getPost(id);
    expect(result.id).toBe(id);
  });

  it('should not get specific post by id=100`', async () => {
    try {
      const id = 100;
      await service.getPost(id);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException)
    }
  });
});
