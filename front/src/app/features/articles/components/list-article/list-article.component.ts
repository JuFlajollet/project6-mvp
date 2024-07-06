import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/models/article';
import { User } from 'src/app/core/models/user';
import { ArticleService } from 'src/app/core/services/article.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.scss'
})
export class ListArticleComponent implements OnInit {
  public articles$!: Observable<Article[]>;

  public articleUsers = new Map<number, User>();

  public sortType: string = 'arrow_downward';

  constructor(
    private articleService: ArticleService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.findAllSorted('asc');

    this.articles$.subscribe((articles: Article[]) => {
      articles.forEach((article: Article) => {
        this.userService.findById(article.author_id.toString()).subscribe((user: User) => {
          this.articleUsers.set(article.id, user);
        })
      })
    });
  }

  sort() {
    if(this.sortType === 'arrow_downward') {
      this.articles$ = this.articleService.findAllSorted('desc');
      this.sortType = 'arrow_upward';
    } else {
      this.articles$ = this.articleService.findAllSorted('asc');
      this.sortType = 'arrow_downward';
    }
  }
}
