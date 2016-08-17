import { EventEmitter, Injectable } from '@angular/core';
import { Blog } from './blog.ts';
import { blogData } from './blog-data';

@Injectable()
export class BlogsService {
  private blogs: Blog[];
  private change: EventEmitter<Blog> = new EventEmitter<Blog>();
  public subscribe: Function;

  constructor() {
    // fetch from server
    this.blogs = blogData.reverse();
    this.subscribe = this.change.subscribe.bind(this.change);
  }

  add(blog: Blog) {
    if (blog.id === 0) {
      const nextId = this.blogs
        .reduce((highest, next) => next.id > highest ?
          next.id :
          highest, 1) + 1;
      blog.id = nextId;
    }
    this.blogs.unshift(blog);
    this.change.emit(blog);
    // upload to server
  }

  get(id: number): Blog {
    return this.blogs.find((el) => el.id === id);
  }

  getAll(): Blog[] {
    return this.blogs;
  }
}
