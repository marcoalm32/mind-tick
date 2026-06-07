import { Component } from '@angular/core';
import { Card } from '../../../shared/components/card/card';

@Component({
  selector: 'app-deadlines',
  imports: [
    Card,
  ],
  templateUrl: './deadlines.html',
  styleUrl: './deadlines.scss',
})
export class Deadlines {}
