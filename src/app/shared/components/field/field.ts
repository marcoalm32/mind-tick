import { Component, input, model } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-field',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './field.html',
  styleUrl: './field.scss',
})
export class Field {
  label = input<string>('');
  placeholder = input<string>('');
  type = input<string>('text');
  disabled = input<boolean>(false);
  error = input<string | undefined>('');
  mask = input<string>('');
  size = input<number>(100);
  icon = input<string | null>(null);

  value = model<string>('');

  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value.set(inputValue);
  }
}
