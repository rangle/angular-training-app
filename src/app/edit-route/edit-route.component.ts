import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActiveBlogService, Blog } from '../shared';
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

  constructor(private activeBlogService: ActiveBlogService) { }

  ngOnDestroy() {
    this.activeBlogObserver.unsubscribe();
  }

  ngOnInit() {
    this.activeBlog = this.activeBlogService.getActive();

    this.activeBlogObserver = this.activeBlogService
      .subscribe((blog) => this.activeBlog = blog);
  }

}
