import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loading } from './shared/components/loading/loading';
import { LoadingService } from './shared/services/loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loading],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public loadingService = inject(LoadingService);
}
