import { Component } from '@angular/core';
import { BlogsListComponent } from './blogs-list';

@Component({
  directives: [ BlogsListComponent ],
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
