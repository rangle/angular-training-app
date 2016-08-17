import { Component, OnInit } from '@angular/core';
import {
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
export class BlogEditComponent implements OnInit, Blog {
  body: string = '';
  id: number = 0;
  title: string = '';

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
  }

  save() {
    this.blogsService.add(this);
  }
}
