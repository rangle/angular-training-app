import { RouterConfig } from '@angular/router';
import { BlogRouteComponent } from './blog-route';
import { EditRouteComponent } from './edit-route';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogRouteComponent },
  { path: 'edit', component: EditRouteComponent },
];
