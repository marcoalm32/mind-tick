import { Component, input, model } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-area',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './text-area.html',
  styleUrl: './text-area.scss',
})
export class TextArea {

  label = input<string>('');
  placeholder = input<string>('');
  type = input<string>('text');
  disabled = input<boolean>(false);
  error = input<string | undefined>('');
  mask = input<string>('');
  size = input<number>(100);
  icon = input<string | null>(null);
  rows = input<number>(3);

  value = model<string>('');

  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value.set(inputValue);
  }
}
