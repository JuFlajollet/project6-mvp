import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';

const routes: Routes = [
  { path: '', title: 'Articles', component: ListArticleComponent },
  { path: 'create', title: 'Articles - Create', component: CreateArticleComponent },
  { path: 'detail/:id', title: 'Articles - Detail', component: DetailArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {
}