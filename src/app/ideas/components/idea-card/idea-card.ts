import { Component } from '@angular/core';
import { Badges } from '../../../shared/components/badges/badges';
import { Button } from '../../../shared/components/button/button';
import { Card } from '../../../shared/components/card/card';
import { Actions } from '../../../shared/models/actions.model';

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

  content: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur enim.';
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
      function: () => console.log('Shared!')
    }
  ];
}
