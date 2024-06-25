import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/models/article';
import { Topic } from 'src/app/core/models/topic';
import { User } from 'src/app/core/models/user';
import { ArticleService } from 'src/app/core/services/article.service';
import { TopicService } from 'src/app/core/services/topic.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.scss'
})
export class DetailArticleComponent {

  public article!: Article;
  public author!: User;
  public topic!: Topic;

  public articleId: string;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private userService: UserService,
    private topicService: TopicService
  ) { 
    this.articleId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.articleService.findById(this.articleId).subscribe((article: Article) => {
      this.article = article;
      this.userService.findById(article.author_id.toString()).subscribe ((user: User) => {
        this.author = user;
      })
      this.topicService.findById(article.topic_id.toString()).subscribe ((topic: Topic) => {
        this.topic = topic;
      })
    })
  }

  public back() {
    window.history.back();
  }

}
