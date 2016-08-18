import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes'
import {
  ActiveBlogService,
  AppComponent,
  BlogsService,
  environment,
} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  ActiveBlogService,
  BlogsService,
  provideRouter(routes),
]);
