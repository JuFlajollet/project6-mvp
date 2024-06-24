import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { TopicsModule } from "../features/topics/topics.module";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { ProfileComponent } from "./profile/profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    providers: [],
    declarations: [
        HomeComponent,
        ProfileComponent
    ],
    imports: [
        TopicsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        HomeComponent,
        ProfileComponent
    ]
})
export class PagesModule { }