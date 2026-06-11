import { inject, Injectable } from '@angular/core';
import { Idea } from '../models/idea.model';
import { ServiceAbstract } from '../../../shared/abstract/service.abstract';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class IdeaService extends ServiceAbstract<Idea> {
  constructor() {
    super(environment.apiUrl + 'ideas', inject(HttpClient));
  }
}
