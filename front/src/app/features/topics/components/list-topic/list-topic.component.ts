import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/core/models/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrl: './list-topic.component.scss'
})
export class ListTopicComponent {

  public topics$: Observable<Topic[]> = this.topicService.findAll();

  constructor(
    private topicService: TopicService,
  ) { }
}
