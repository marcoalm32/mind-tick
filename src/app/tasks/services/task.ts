import { inject, Injectable } from '@angular/core';
import { ServiceAbstract } from '../../shared/abstract/service.abstract';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends ServiceAbstract<Task> {

  constructor() {
    super(environment.apiUrl + 'tasks', inject(HttpClient));
  }
}
