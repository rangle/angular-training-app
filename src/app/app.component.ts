import { Component, OnDestroy, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { BlogsListComponent } from './blogs-list';
import { ActiveBlogComponent } from './active-blog';
import { ActiveBlogService, Blog } from './shared';

@Component({
  directives: [ ActiveBlogComponent, BlogsListComponent, ROUTER_DIRECTIVES ],
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(private activeBlogService: ActiveBlogService) {}

  ngOnDestroy() {
  }

  ngOnInit() {
  }
}
