import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsModule } from './features/topics/topics.module';
import { PagesModule } from './pages/pages.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AuthModule } from './features/auth/auth.module';

@NgModule({
    providers: [provideHttpClient(withFetch())],
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
