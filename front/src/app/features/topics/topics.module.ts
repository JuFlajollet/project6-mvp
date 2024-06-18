import { MatCardModule } from "@angular/material/card";
import { ListTopicComponent } from "./components/list-topic/list-topic.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        ListTopicComponent
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        CommonModule
    ],
    exports: [
        ListTopicComponent
    ]
})
export class TopicsModule { }