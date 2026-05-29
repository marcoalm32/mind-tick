import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  title = input<string>('Cadastrar');
  titleAlign = input<string>('center');
  size = input<number>(50);
  subtitle = input<string>('');
  subtitleAlign = input<string>('center');
}