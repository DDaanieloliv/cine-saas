import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { BrowsePage } from './pages/browse-page/browse-page';
import { CollectionPage } from './pages/collection-page/collection-page';
import { BlogPage } from './pages/blog-page/blog-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'browse',
    component: BrowsePage,
  },
  {
    path: 'collection',
    component: CollectionPage,
  },
  {
    path: 'blog',
    component: BlogPage,
  },
];
