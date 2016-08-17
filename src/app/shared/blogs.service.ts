import { Injectable } from '@angular/core';
import { Blog } from './blog.ts';
import { blogData } from './blog-data';

@Injectable()
export class BlogsService {
  private blogs: Blog[];

  constructor() {
    // fetch from server
    this.blogs = blogData.reverse();
  }

  add(blog: Blog) {
    this.blogs.unshift(blog);
    // upload to server
  }

  get(id: number): Blog {
    return this.blogs.find((el) => el.id === id);
  }

  getAll(): Blog[] {
    return this.blogs;
  }
}
