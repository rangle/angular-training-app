import { RouterConfig } from '@angular/router';
import { ActiveBlogComponent } from './active-blog';
import { BlogEditComponent } from './blog-edit';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'edit-blog', pathMatch: 'full' },
  { path: 'active-blog', component: ActiveBlogComponent },
  { path: 'edit-blog', component: BlogEditComponent },
];
