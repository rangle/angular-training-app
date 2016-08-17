import { EventEmitter, Injectable } from '@angular/core';
import { Blog } from './blog';
import { BlogsService } from './blogs.service';

@Injectable()
export class ActiveBlogService {
  private activeBlog: Blog;
  private change: EventEmitter<Blog> = new EventEmitter<Blog>();
  subscribe: Function;

  constructor(private blogsService: BlogsService) {
    this.activeBlog = blogsService.getAll()[0] || null;
    this.subscribe = this.change.subscribe.bind(this.change);
  }

  getActive() {
    return this.activeBlog;
  }

  setActive(id: number) {
    const blog = this.blogsService.get(id);
    if (blog) {
      this.activeBlog = blog;
      this.change.emit(this.activeBlog);
    }
  }
}
