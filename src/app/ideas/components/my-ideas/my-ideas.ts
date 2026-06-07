import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../../services/ideas';
import { Subscription } from 'rxjs';
import { Idea } from '../../models/idea.model';
import { Params } from '../../../shared/models/dto/params.model';
import { ListAbstract } from '../../../shared/abstract/list.abstract';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-ideas',
  imports: [],
  templateUrl: './my-ideas.html',
  styleUrl: './my-ideas.scss',
})
export class MyIdeas extends ListAbstract<Idea> {

  override params: Params = {
    page: 0,
    pageSize: 10,
    search: '',
  }
  constructor(
    protected override readonly router: Router,
    protected override readonly service: IdeaService,
  ) {
    super(router, service);
  }

}
