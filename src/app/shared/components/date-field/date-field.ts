import { Component, input, model } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-date-field',
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule, 
  ],
  templateUrl: './date-field.html',
  styleUrl: './date-field.scss',
})
export class DateField {

  label = input<string>('');
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  error = input<string | undefined>('');
  size = input<number>(100);
  value = model<string>('');

  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value.set(inputValue);
  }

  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    const date = event.value;
    this.value.set(date ? date.toISOString() : '');
  }
}
