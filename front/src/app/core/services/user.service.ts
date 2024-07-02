import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UpdateRequest } from '../models/updateRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private pathService = 'api/users';

  constructor(private httpClient: HttpClient) { }

  public findById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.pathService}/${id}`);
  }

  public update(id: string, updateRequest: UpdateRequest): Observable<void> {
    return this.httpClient.put<void>(`${this.pathService}/${id}`, updateRequest);
  }
}
