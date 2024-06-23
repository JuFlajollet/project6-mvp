import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private pathService = 'api/user';

  constructor(private httpClient: HttpClient) { }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(`${this.pathService}/${id}`, {responseType: 'text'});
  }

  public update(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.pathService}/${id}`, user);
  }
}
