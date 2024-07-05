import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { ListArticleComponent } from "./components/list-article/list-article.component";
import { CoreModule } from "src/app/core/core.module";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { RouterLink } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { CreateArticleComponent } from "./components/create-article/create-article.component";
import { DetailArticleComponent } from "./components/detail-article/detail-article.component";
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [
        ListArticleComponent,
        CreateArticleComponent,
        DetailArticleComponent
    ],
    imports: [
        ArticlesRoutingModule,
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatPaginatorModule,
        CoreModule,
        MatCardModule,
        MatButtonModule,
        CommonModule
    ],
    exports: [
        ListArticleComponent,
        CreateArticleComponent,
        DetailArticleComponent
    ]
})
export class ArticlesModule { }