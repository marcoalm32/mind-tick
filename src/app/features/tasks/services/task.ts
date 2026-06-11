import { inject, Injectable } from '@angular/core';
import { ServiceAbstract } from '../../../shared/abstract/service.abstract';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../../../shared/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends ServiceAbstract<Task> {

  private url = environment.apiUrl;
  constructor() {
    super(environment.apiUrl + 'tasks', inject(HttpClient));
  }

  taskExpiring(): Observable<Response<Task[]>> {
    return this.http.get<Response<Task[]>>(`${this.url}tasks/expiring`);
  }
}
