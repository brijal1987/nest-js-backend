import { Injectable, HttpException } from '@nestjs/common';
import { POSTS } from '../mocks/posts.mock';

@Injectable()
export class PostsService {
    posts = POSTS;

    getPosts(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.posts);
        });
    }
    getPost(id): Promise<any> {
        let postID = Number(id);
        return new Promise(resolve => {
            const post = this.posts.find(post => post.id === postID);
            if (!post) {
                throw new HttpException('Post does not exist!', 404);
            }
            resolve(post);
        });
    }}
