import { MatCardModule } from "@angular/material/card";
import { ListTopicComponent } from "./components/list-topic/list-topic.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ListTopicComponent
    ],
    imports: [
        MatCardModule,
        CommonModule
    ],
    exports: [
        ListTopicComponent
    ]
})
export class TopicsModule { }