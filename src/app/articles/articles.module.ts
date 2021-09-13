import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesDetailComponent } from './articles-detail/articles-detail.component';

@NgModule({
  declarations: [ArticlesListComponent, ArticlesDetailComponent],
  imports: [CommonModule, ArticlesRoutingModule],
})
export class ArticlesModule {}
