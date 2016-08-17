import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { BlogsService } from './blogs.service';
import { EMPTY_BLOG } from './defaults';

@Injectable()
export class ActiveBlogService {
  private blog: Blog = EMPTY_BLOG;

  constructor(private blogsService: BlogsService) {
     this.blog = blogsService.mostRecent();
  }

  getActive() {
    return this.blog;
  }

  setActive(id: number) {
    const blog = this.blogsService.get(id);

    if (blog) {
      this.blog = blog;
    } else {
      this.blog = EMPTY_BLOG;
    }
  }

}
