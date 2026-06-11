import { Component } from '@angular/core';
import { IdeaCard } from '../idea-card/idea-card';
import { PostIdea } from '../post-idea/post-idea';
import { IdeaService } from '../../services/ideas';
import { Idea } from '../../models/idea.model';
import { Params } from '../../../../shared/models/dto/params.model';
import { ListAbstract } from '../../../../shared/abstract/list.abstract';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    IdeaCard,
    PostIdea,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard extends ListAbstract<Idea> {

  override params: Params = new Params();
  constructor(
    protected override readonly router: Router,
    protected override readonly service: IdeaService,
  ) {
    super(router, service);
  }
}