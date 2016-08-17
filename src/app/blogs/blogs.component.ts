import { Component, OnInit } from '@angular/core';
import { Blog, BlogsService, SettingsService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'a2t-blogs',
  templateUrl: 'blogs.component.html',
  styleUrls: ['blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogsService: BlogsService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.populate();
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
