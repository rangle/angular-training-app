import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  AppComponent,
  ActiveBlogService,
  BlogsService,
  environment,
  routes,
  SettingsService,
} from './app';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  ActiveBlogService,
  BlogsService,
  provideRouter(routes),
  SettingsService,
]);
