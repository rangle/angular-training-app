import { Component } from '@angular/core';
import { BlogsComponent } from './blogs';

@Component({
  directives: [ BlogsComponent ],
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
}
