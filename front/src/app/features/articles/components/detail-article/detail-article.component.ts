import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/models/article';
import { Comment } from 'src/app/core/models/comment';
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

  public article$!: Observable<Article>;
  public author$!: Observable<User>;
  public topic$!: Observable<Topic>;
  public comments$!: Observable<Comment[]>;

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
    this.article$ = this.articleService.findById(this.articleId);

    this.article$.subscribe((article: Article) => {
      this.author$ = this.userService.findById(article.author_id.toString());
      this.topic$ = this.topicService.findById(article.topic_id.toString());
      this.comments$ = this.articleService.findCommentsById(this.articleId);
    })
  }

  public back() {
    window.history.back();
  }

  public getCommentAuthor(authorId: number): Observable<User> {
    return this.userService.findById(authorId.toString());
  }
}
