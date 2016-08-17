import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActiveBlogService, Blog } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'a2t-active-blog',
  templateUrl: 'active-blog.component.html',
  styleUrls: ['active-blog.component.css']
})
export class ActiveBlogComponent implements Blog, OnDestroy, OnInit {
  body: string;
  id: number = 0;
  title: string;

  private unsubscribe: Function;

  constructor(private activeBlogService: ActiveBlogService) { }

  ngOnDestroy() {
    this.unsubscribe();
  }

  ngOnInit() {
    this.unsubscribe = this.activeBlogService
      .subscribe(this.setActive.bind(this));
    this.setActive();
  }

  setActive() {
    const blog = this.activeBlogService.getActive();
    if (!blog) {
      this.id = 0;
      this.body = '';
      this.title = '';
    } else {
      this.id = blog.id;
      this.body = blog.body;
      this.title = blog.title;
    }
  }
}
