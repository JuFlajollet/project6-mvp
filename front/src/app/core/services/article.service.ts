import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private pathService = 'api/article';

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.pathService);
  }

  public create(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.pathService, article);
  }
}
