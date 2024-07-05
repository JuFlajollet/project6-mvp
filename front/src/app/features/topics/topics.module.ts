import { MatCardModule } from "@angular/material/card";
import { ListTopicComponent } from "./components/list-topic/list-topic.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { provideHttpClient } from "@angular/common/http";
import { CoreModule } from "src/app/core/core.module";
import { TopicsRoutingModule } from "./topics-routing.module";
import { ListTopicCardComponent } from "./components/list-topic-card/list-topic-card.component";

@NgModule({
    declarations: [
        ListTopicComponent,
        ListTopicCardComponent
    ],
    imports: [
        TopicsRoutingModule,
        CoreModule,
        MatCardModule,
        MatButtonModule,
        CommonModule
    ],
    exports: [
        ListTopicComponent,
        ListTopicCardComponent
    ]
})
export class TopicsModule { }