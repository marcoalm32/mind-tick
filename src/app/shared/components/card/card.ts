import { Component, input } from '@angular/core';
import { Button } from '../button/button';
import { MatIconModule } from '@angular/material/icon';
import { Actions } from '../../models/actions.model';

@Component({
  selector: 'app-card',
  imports: [
    Button,
    MatIconModule,
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

  title = input<string>('Card Title');
  size = input<number>(100);
  hasFooter = input<boolean>(true);

  listActions = input<Actions[]>([]);

}
