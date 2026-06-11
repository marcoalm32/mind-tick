import { Component, input, output } from '@angular/core';
import { Badges } from '../../../../shared/components/badges/badges';
import { Button } from '../../../../shared/components/button/button';
import { Card } from '../../../../shared/components/card/card';
import { Actions } from '../../../../shared/models/actions.model';
import { Idea } from '../../models/idea.model';

@Component({
  selector: 'app-idea-card',
  imports: [
    Badges,
    Button,
    Card,
  ],
  templateUrl: './idea-card.html',
  styleUrl: './idea-card.scss',
})
export class IdeaCard {

  idea = input.required<Idea>();
  deleteAction = output<Idea>();
  actions: Actions[] = [
    {
      id: 1,
      label: '',
      icon: 'add',
      variant: 'icon',
      width: 24,
      function: () => console.log('Liked!')
    },
    {
      id: 2,
      label: '',
      icon: 'bookmark_border ',
      variant: 'icon',
      width: 24,
      function: () => console.log('Disliked!')
    },
    {
      id: 3,
      label: '',
      icon: 'delete ',
      variant: 'icon',
      width: 24,
      function: () => this.deleteIdea()
    }
  ];

  deleteIdea(): void {
    this.deleteAction.emit(this.idea());
  }
}
