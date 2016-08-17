import { Component, OnInit } from '@angular/core';
import { BlogsListComponent } from './blogs-list';
import { ActiveBlogComponent } from './active-blog';
import { ActiveBlogService, Blog } from './shared';

@Component({
  directives: [ ActiveBlogComponent, BlogsListComponent ],
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private activeBlog: Blog;

  constructor(private activeBlogService: ActiveBlogService) {}

  ngOnInit() {
    this.activeBlog = this.activeBlogService.getActive();
  }
}
