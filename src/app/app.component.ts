import { Component } from '@angular/core';
import { BlogsComponent } from './blogs';
import { BlogEditComponent } from './blog-edit';
import { ActiveBlogComponent } from './active-blog';

@Component({
  directives: [ ActiveBlogComponent, BlogsComponent, BlogEditComponent ],
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
}
