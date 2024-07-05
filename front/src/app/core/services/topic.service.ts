import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private pathService = 'api/topics';

  constructor(private httpClient: HttpClient) {}

  public findAll(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.pathService);
  }

  public findById(id: string): Observable<Topic> {
    return this.httpClient.get<Topic>(`${this.pathService}/${id}`);
  }

  public findAllSubscribedTopicsByUserId(userId: string): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(`${this.pathService}/subscribe/${userId}`);
  }

  public subscribeTopic(id: string, userId: string): Observable<void> {
    return this.httpClient.post<void>(`${this.pathService}/${id}/subscribe/${userId}`, null);
  }

  public unsubscribeTopic(id: string, userId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.pathService}/${id}/subscribe/${userId}`);
  }
}
