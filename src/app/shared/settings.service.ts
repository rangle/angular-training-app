import { Injectable } from '@angular/core';
import { MAX_BLOGS_PER_PAGE } from './defaults';

@Injectable()
export class SettingsService {
  maxBlogsPerPage: number;

  constructor() {
    this.maxBlogsPerPage = MAX_BLOGS_PER_PAGE;
  }

}
