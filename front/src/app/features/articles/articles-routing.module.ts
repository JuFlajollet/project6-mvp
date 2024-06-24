import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';

const routes: Routes = [
  { path: '', title: 'Articles', component: ListArticleComponent },
  { path: 'create', title: 'Articles - Create', component: CreateArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {
}