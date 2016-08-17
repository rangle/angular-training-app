/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ActiveBlogService } from './active-blog.service';

describe('Service: ActiveBlog', () => {
  beforeEach(() => {
    addProviders([ActiveBlogService]);
  });

  it('should ...',
    inject([ActiveBlogService],
      (service: ActiveBlogService) => {
        expect(service).toBeTruthy();
      }));
});
