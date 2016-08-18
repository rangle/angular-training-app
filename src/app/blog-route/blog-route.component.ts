import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActiveBlogService, Blog } from '../shared';
import { ActiveBlogComponent } from '../active-blog';

@Component({
  directives: [ ActiveBlogComponent ],
  moduleId: module.id,
  selector: 'ata-blog-route',
  templateUrl: 'blog-route.component.html',
  styleUrls: ['blog-route.component.css']
})
export class BlogRouteComponent implements OnDestroy, OnInit {
  private activeBlog: Blog;
  private unsubscribeActiveBlog: Function;


  constructor(private activeBlogService: ActiveBlogService) { }

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
