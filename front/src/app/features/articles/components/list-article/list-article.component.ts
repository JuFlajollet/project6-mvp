import { Component, OnInit } from '@angular/core';
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
  public articles!: Article[];

  public articleUsers = new Map<Article, User>();

  public sortType: string = 'arrow_downward';

  constructor(
    private articleService: ArticleService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.articleService.findAll().subscribe((articles: Article[]) => {
      articles.forEach((article: Article) => {
        this.userService.findById(article.author_id.toString()).subscribe((user: User) => {
          this.articleUsers.set(article, user);
        })
      })
      this.articles = articles;
      this.sort();
    });
  }

  sort() {
    if(this.sortType === 'arrow_downward') {
      this.articles.sort((a, b) => a.date.getSeconds < b.date.getSeconds? -1: 1);
      this.sortType = 'arrow_upward';
    } else {
      this.articles.sort((a, b) => a.date.getSeconds > b.date.getSeconds? -1: 1);
      this.sortType = 'arrow_downward';
    }
  }
}
