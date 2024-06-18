import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { TopicsModule } from "../features/topics/topics.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        TopicsModule
    ],
    exports: [
        HomeComponent
    ]
})
export class PagesModule { }