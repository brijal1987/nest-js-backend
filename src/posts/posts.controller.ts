import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) { }

    @Get()
    async getPosts() {
        const books = await this.postsService.getPosts();
        return books;
    }

    @Get(':id')
    async getPost(@Param('id') id) {
        return await this.postsService.getPost(id);
    }
}
