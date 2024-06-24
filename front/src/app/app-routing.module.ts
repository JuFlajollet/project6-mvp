import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ListArticleComponent } from './features/articles/components/list-article/list-article.component';
import { ListTopicComponent } from './features/topics/components/list-topic/list-topic.component';

// consider a guard combined with canLoad / canActivate route option
// to manage unauthenticated user to access private routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'articles',
    loadChildren: () => import('./features/articles/articles.module').then(m => m.ArticlesModule)
  },
  { 
    path: 'topics',
    loadChildren: () => import('./features/topics/topics.module').then(m => m.TopicsModule)
  },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
