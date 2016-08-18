import { Component, OnInit } from '@angular/core';
import { EditorComponent } from '../editor';

@Component({
  directives: [ EditorComponent ],
  moduleId: module.id,
  selector: 'ata-edit-route',
  templateUrl: 'edit-route.component.html',
  styleUrls: ['edit-route.component.css']
})
export class EditRouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
