import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActiveBlogService,
  Blog,
  BlogsService,
  InputComponent,
  TextAreaComponent,
} from '../shared';

@Component({
  directives: [InputComponent, TextAreaComponent],
  moduleId: module.id,
  selector: 'a2t-blog-edit',
  templateUrl: 'blog-edit.component.html',
  styleUrls: ['blog-edit.component.css']
})
export class BlogEditComponent implements OnDestroy, OnInit, Blog {
  body: string = '';
  id: number = 0;
  title: string = '';
  unsubscribe: Function;

  constructor(private blogsService: BlogsService,
              private activeBlogService: ActiveBlogService) { }

  ngOnDestroy() {
    this.unsubscribe();
  }

  ngOnInit() {
    const observer = this.activeBlogService.subscribe(this.populate.bind(this));
    this.unsubscribe = observer.unsubscribe;
    this.populate();
  }

  populate() {
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

  save() {
    this.blogsService.add(this);
  }
}
