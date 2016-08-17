import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { BlogsComponent } from './blogs';
import { BlogEditComponent } from './blog-edit';
import { ActiveBlogComponent } from './active-blog';
import { ActiveBlogService } from './shared';

@Component({
  directives: [
    ActiveBlogComponent, BlogsComponent, BlogEditComponent, ROUTER_DIRECTIVES ],
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(private router: Router,
    private activeBlogService: ActiveBlogService) { }

  newPost() {
    this.activeBlogService.setActive(0);
    this.router.navigate(['/edit-blog']);
  }
}
