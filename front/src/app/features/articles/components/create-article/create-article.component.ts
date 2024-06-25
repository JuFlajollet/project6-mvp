import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/models/article';
import { Topic } from 'src/app/core/models/topic';
import { ArticleService } from 'src/app/core/services/article.service';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss'
})
export class CreateArticleComponent {

  public topics$: Observable<Topic[]> = this.topicService.findAll();

  public form: FormGroup = this.formBuilder.group({
    title: [
      '',
      [
        Validators.required,
        Validators.max(50)
      ]
    ],
    content: [
      '',
      [
        Validators.required,
        Validators.max(2500)
      ]
    ],
    topic_id: [
      '',
      [Validators.required]
    ],
  });

  constructor(private topicService: TopicService,
              private articleService: ArticleService,
              private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar,
              private router: Router) {
  }

  public back() {
    window.history.back();
  }

  public save(): void {
    const article = this.form?.value as Article;
    article.date = new Date();
    article.author_id = 1; //TODO: Use from session

    this.articleService.create(article).subscribe((_: Article) => {  
      this.matSnackBar.open('Article Created!', 'Close', { duration: 3000 });
      this.router.navigate(['articles']);
    });
  }
}
