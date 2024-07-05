import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ListArticleComponent } from './features/articles/components/list-article/list-article.component';
import { ListTopicComponent } from './features/topics/components/list-topic/list-topic.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthGuard } from './core/guards/unauth.guard';

// consider a guard combined with canLoad / canActivate route option
// to manage unauthenticated user to access private routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', 
    canActivate: [UnauthGuard],
    component: LoginComponent 
  },
  { path: 'register',
    canActivate: [UnauthGuard],
    component: RegisterComponent 
  },
  { 
    path: 'articles',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/articles/articles.module').then(m => m.ArticlesModule)
  },
  { 
    path: 'topics',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/topics/topics.module').then(m => m.TopicsModule)
  },
  { path: 'profile',
    canActivate: [AuthGuard], 
    component: ProfileComponent 
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
