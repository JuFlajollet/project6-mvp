import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/core/models/topic';
import { SessionService } from 'src/app/core/services/session.service';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrl: './list-topic.component.scss'
})
export class ListTopicComponent implements OnInit {

  public topics$!: Observable<Topic[]>;
  public userId!: number;

  public topicSubscriptions = new Map<number, boolean>();

  constructor(
    private sessionService: SessionService,
    private topicService: TopicService
  ) { 
    this.topics$ = this.topicService.findAll();
    this.userId = this.sessionService.session!.id;
  }

  ngOnInit(): void {}
  
  public onSubscribe(topicId: number): void {
    this.topicService.subscribeTopic(topicId.toString(), this.userId.toString()).subscribe(_ => this.fetchTopics());
  }

  public onUnsubscribe(topicId: number): void {
    this.topicService.unsubscribeTopic(topicId.toString(), this.userId.toString()).subscribe(_ => this.fetchTopics());
  }

  private fetchTopics(): void {
    this.topics$ = this.topicService.findAll();
    this.topics$.subscribe((topics: Topic[]) => {
      topics.forEach((topic: Topic) => {
        const isSubscribed = topic.users.some(userId => userId === this.userId);
        this.topicSubscriptions.set(topic.id, isSubscribed);
      })
    });
  }
}
