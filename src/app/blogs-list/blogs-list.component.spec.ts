/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BlogsListComponent } from './blogs-list.component';

describe('Component: BlogsList', () => {
  it('should create an instance', () => {
    let component = new BlogsListComponent();
    expect(component).toBeTruthy();
  });
});
