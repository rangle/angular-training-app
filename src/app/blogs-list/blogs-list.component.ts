import { Component, OnInit } from '@angular/core';
import { ActiveBlogService, Blog, BlogsService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ata-blogs-list',
  templateUrl: 'blogs-list.component.html',
  styleUrls: ['blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogsService: BlogsService,
              private activeBlogService: ActiveBlogService) { }

  /* move this logic up a level.  Use @Input/@Output instead */
  ngOnInit() {
    this.blogs = this.blogsService.getAll();
  }

  /* move this logic up a level.  Use @Input/@Output instead */
  onClick(id: number) {
    console.log('blog-click', id);
    this.activeBlogService.setActive(id);
  }
}
