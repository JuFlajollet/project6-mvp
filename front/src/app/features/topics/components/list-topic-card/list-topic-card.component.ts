import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/core/models/topic';
import { User } from 'src/app/core/models/user';
import { SessionService } from 'src/app/core/services/session.service';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-list-topic-card',
  templateUrl: './list-topic-card.component.html',
  styleUrl: './list-topic-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTopicCardComponent {

  @Input()
  public topics!: Topic[];
  @Input()
  public topicSubscriptions!: Map<number, boolean>;

  @Output() subscribe: EventEmitter<any> = new EventEmitter();
  @Output() unsubscribe: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
