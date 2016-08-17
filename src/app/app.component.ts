import { Component } from '@angular/core';
import { BlogsComponent } from './blogs';
import { BlogEditComponent } from './blog-edit';

@Component({
  directives: [ BlogsComponent, BlogEditComponent ],
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
}
