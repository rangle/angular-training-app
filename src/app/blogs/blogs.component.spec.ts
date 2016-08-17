/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BlogsComponent } from './blogs.component';

describe('Component: Blogs', () => {
  it('should create an instance', () => {
    let component = new BlogsComponent();
    expect(component).toBeTruthy();
  });
});
