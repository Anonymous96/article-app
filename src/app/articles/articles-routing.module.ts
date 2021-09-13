import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesDetailComponent } from './articles-detail/articles-detail.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
  { path: '', component: ArticlesListComponent },
  { path: '/details', component: ArticlesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
