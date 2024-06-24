import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { ListArticleComponent } from "./components/list-article/list-article.component";
import { CoreModule } from "src/app/core/core.module";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { RouterLink } from "@angular/router";

@NgModule({
    declarations: [
        ListArticleComponent
    ],
    imports: [
        ArticlesRoutingModule,
        RouterLink,
        CoreModule,
        MatCardModule,
        MatButtonModule,
        CommonModule
    ],
    exports: [
        ListArticleComponent
    ]
})
export class ArticlesModule { }