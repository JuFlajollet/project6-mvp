import { NgModule } from "@angular/core";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        CommonModule,
        RouterLink
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthModule { }