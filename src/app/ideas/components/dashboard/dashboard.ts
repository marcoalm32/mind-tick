import { Component } from '@angular/core';
import { IdeaCard } from '../idea-card/idea-card';
import { PostIdea } from '../post-idea/post-idea';
import { Deadlines } from '../deadlines/deadlines';

@Component({
  selector: 'app-dashboard',
  imports: [
    IdeaCard,
    PostIdea,
    Deadlines,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
