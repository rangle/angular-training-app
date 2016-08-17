import { Component, OnInit } from '@angular/core';
import { Blog, BlogsService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ata-blogs-list',
  templateUrl: 'blogs-list.component.html',
  styleUrls: ['blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogs = this.blogsService.getAll();
  }

}
