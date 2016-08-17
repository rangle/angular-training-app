import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActiveBlogService,
  Blog,
  BlogsService,
  SettingsService,
} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'a2t-blogs',
  templateUrl: 'blogs.component.html',
  styleUrls: ['blogs.component.css']
})
export class BlogsComponent implements OnDestroy, OnInit {
  blogs: Blog[];
  unsubscribe: Function;

  constructor(private blogsService: BlogsService,
              private settingsService: SettingsService,
              private activeBlogService: ActiveBlogService) { }

  ngOnDestroy() {
    this.unsubscribe();
  }

  ngOnInit() {
    this.populate();
    const observer = this.blogsService.subscribe(this.populate.bind(this));
    this.unsubscribe = observer.unsubscribe;
  }

  activateBlog(id: number) {
    this.activeBlogService.setActive(id);
  }

  populate() {
    const max = this.settingsService.maxBlogsPerPage;
    this.blogs = [];

    this.blogsService
      .getAll()
      .forEach((blog, index) => {
        if (index > max) {
          return;
        }
        this.blogs.push(blog);
      });
  }

}
