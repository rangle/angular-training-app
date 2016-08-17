import { Component } from '@angular/core';
import { BlogsListComponent } from './blogs-list';
import { ActiveBlogComponent } from './active-blog';

@Component({
  directives: [ ActiveBlogComponent, BlogsListComponent ],
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
