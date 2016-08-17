import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { blogData } from './blog-data';

@Injectable()
export class BlogsService {
  private blogs: Map<number, Blog>;

  constructor() {
    // fetch blogs
    blogData.forEach(this.set.bind(this));
  }

  get(id: number) {
    return this.blogs.get(id);
  }

  getAll() {
    return this.blogs;
  }

  set(blog: Blog) {
    this.blogs.set(blog.id, blog);
  }
}
