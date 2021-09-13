import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesDetailComponent } from './articles/articles-detail/articles-detail.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./articles/articles.module').then((mod) => mod.ArticlesModule),
  // },
  { path: '', component: ArticlesListComponent },
  { path: '/details', component: ArticlesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
