/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ActiveBlogComponent } from './active-blog.component';

describe('Component: ActiveBlog', () => {
  it('should create an instance', () => {
    let component = new ActiveBlogComponent();
    expect(component).toBeTruthy();
  });
});
