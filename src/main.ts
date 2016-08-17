import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {
  AppComponent,
  BlogsService,
  environment,
} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [BlogsService]);
