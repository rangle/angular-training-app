import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActiveBlogService, Blog, BlogsService } from '../shared';
import { EditorComponent } from '../editor';

@Component({
  directives: [ EditorComponent ],
  moduleId: module.id,
  selector: 'ata-edit-route',
  templateUrl: 'edit-route.component.html',
  styleUrls: ['edit-route.component.css']
})
export class EditRouteComponent implements OnDestroy, OnInit {
  activeBlog: Blog;
  activeBlogObserver;

  constructor(private activeBlogService: ActiveBlogService,
              private blogsService: BlogsService) { }

  ngOnDestroy() {
    this.activeBlogObserver.unsubscribe();
  }

  ngOnInit() {
    this.activeBlog = this.activeBlogService.getActive();

    this.activeBlogObserver = this.activeBlogService
      .subscribe((blog) => this.activeBlog = blog);
  }

  onUpdate(blog: Blog) {
    this.blogsService.set(blog);
  }

}
