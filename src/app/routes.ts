import { RouterConfig } from '@angular/router';
import { BlogRouteComponent } from './blog-route';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogRouteComponent },
];
