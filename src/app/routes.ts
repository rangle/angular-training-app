import { RouterConfig } from '@angular/router';
import { ActiveBlogComponent } from './active-blog';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: ActiveBlogComponent },
];
