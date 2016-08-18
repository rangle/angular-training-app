import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class AppComponent implements OnDestroy, OnInit {
  private activeBlog: Blog;
  private unsubscribeActiveBlog: Function;

  constructor(private activeBlogService: ActiveBlogService) {}

  ngOnDestroy() {
    this.unsubscribeActiveBlog();
  }

  ngOnInit() {
    this.activeBlog = this.activeBlogService.getActive();

    const observer = this.activeBlogService.subscribe((blog: Blog) => {
      this.activeBlog = blog;
    });

    this.unsubscribeActiveBlog = observer.unsubscribe.bind(observer);
  }
}
