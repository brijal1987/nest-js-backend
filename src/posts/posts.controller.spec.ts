import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  beforeEach(() => {
    service = new PostsService();
    controller = new PostsController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all posts', async () => {
    const result: any = [{
      "userId": 1,
      "id": 1,
      "title": "provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 2,
        "id": 2,
        "title": "sunt aut ",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }];

    jest.spyOn(service, 'getPosts').mockImplementationOnce(() => result);
    const posts = await controller.getPosts();
    expect(posts.length).toBeGreaterThan(0);
  });


  it('should get post by id', async () => {
    const result: any = {
      "userId": 1,
      "id": 1,
      "title": "provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      };

    jest.spyOn(service, 'getPost').mockImplementationOnce(() => result);
    const posts = await controller.getPost(1);
    expect(posts.id).toBe(1);
  });
});
