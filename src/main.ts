import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { SettingsService } from './app/shared/settings.service';
import { BlogsService } from './app/shared/blogs.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  BlogsService,
  SettingsService,
]);
