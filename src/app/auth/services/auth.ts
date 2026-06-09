import { Injectable } from '@angular/core';
import { ServiceAbstract } from '../../shared/abstract/service.abstract';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ServiceAbstract<User> {

  constructor(
    protected override readonly http: HttpClient
  ) {
    super(environment.apiUrl + '/auth', http);
  }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.endpoint}/login`, { username, password });
  }

  register(user: User) {
    return this.http.post<User>(`${this.endpoint}/register`, user);
  }
}
