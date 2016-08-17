/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BlogsService } from './blogs.service';

describe('Service: Blogs', () => {
  beforeEach(() => {
    addProviders([BlogsService]);
  });

  it('should ...',
    inject([BlogsService],
      (service: BlogsService) => {
        expect(service).toBeTruthy();
      }));
});
