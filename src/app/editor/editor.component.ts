import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FORM_DIRECTIVES, NgForm } from '@angular/forms';
import { Blog } from '../shared';

@Component({
  directives: [ FORM_DIRECTIVES ],
  moduleId: module.id,
  selector: 'ata-editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() blog: Blog;
  @Output() update = new EventEmitter<Blog>();

  constructor() { }

  ngOnInit() {
  }

  updateBlog(blogEditor: NgForm) {
    this.update.emit({
      body: blogEditor.value.body,
      id: this.blog.id,
      title: blogEditor.value.title,
    });
  }

}
