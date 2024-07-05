import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsModule } from './features/topics/topics.module';
import { PagesModule } from './pages/pages.module';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AuthModule } from './features/auth/auth.module';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';

@NgModule({
    providers: [
        provideHttpClient(withInterceptors([jwtInterceptor])),
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        CoreModule,
        TopicsModule,
        PagesModule,
        AuthModule
    ]
})
export class AppModule {}
