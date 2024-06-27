import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private pathService = 'api/articles';

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.pathService);
  }

  public findById(id: string): Observable<Article> {
    return this.httpClient.get<Article>(`${this.pathService}/${id}`);
  }

  public create(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.pathService, article);
  }

  public findCommentsById(id: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.pathService}/${id}/comments`);
  }

  public createComment(id: string, comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(`${this.pathService}/${id}/comments`, comment);
  }
}
