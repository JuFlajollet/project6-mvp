import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Article } from 'src/app/core/models/article';
import { Comment } from 'src/app/core/models/comment';
import { Topic } from 'src/app/core/models/topic';
import { User } from 'src/app/core/models/user';
import { ArticleService } from 'src/app/core/services/article.service';
import { SessionService } from 'src/app/core/services/session.service';
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
  public commentUsers = new Map<number, User>();

  public articleId: string;

  public form: FormGroup = this.formBuilder.group({
    content: [
      '',
      [
        Validators.required,
        Validators.max(2500)
      ]
    ]
  });

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private userService: UserService,
    private topicService: TopicService,
    private sessionService: SessionService,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar
  ) { 
    this.articleId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.article$ = this.articleService.findById(this.articleId);

    this.article$.subscribe((article: Article) => {
      this.author$ = this.userService.findById(article.author_id.toString());
      this.topic$ = this.topicService.findById(article.topic_id.toString());
      this.getComments(article.id);
    })
  }

  public back(): void {
    window.history.back();
  }

  public save(): void {
    if(this.sessionService.session){
      const articleId = parseInt(this.articleId, 10);

      const comment = this.form?.value as Comment;
      comment.author_id = this.sessionService.session.id;
      comment.article_id = articleId;

      this.articleService.createComment(this.articleId, comment).subscribe((_: Comment) => {  
        this.matSnackBar.open('Comment Created!', 'Close', { duration: 3000 });
        this.getComments(articleId);
        this.form.reset();
      });
    }
  }

  public getComments(articleId: number): void {
    this.comments$ = this.articleService.findCommentsById(this.articleId);
    this.comments$.subscribe((comments: Comment[]) => {
      comments.forEach((comment: Comment) => {
        this.userService.findById(comment.author_id.toString()).subscribe((user: User) => {
          this.commentUsers.set(comment.id, user);
        })
      })
    })
  }

  public getCommentAuthor(authorId: number): Observable<User> {
    return this.userService.findById(authorId.toString());
  }
}
