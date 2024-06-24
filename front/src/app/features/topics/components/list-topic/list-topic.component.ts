import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/core/models/topic';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrl: './list-topic.component.scss'
})
export class ListTopicComponent implements OnInit {

  public topics$!: Observable<Topic[]>;

  constructor(
    private topicService: TopicService,
  ) { }

  ngOnInit(): void {
    this.topics$ = this.topicService.findAll();
  }
}
