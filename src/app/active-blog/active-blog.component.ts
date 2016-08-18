import { Component, Input } from '@angular/core';
import { Blog, EMPTY_BLOG } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ata-active-blog',
  templateUrl: 'active-blog.component.html',
  styleUrls: ['active-blog.component.css']
})
export class ActiveBlogComponent {
  @Input() blog: Blog = EMPTY_BLOG;

  constructor() { }
}
