import { Component, input, model } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Appearance } from '../../types/appearance';
import { OptionsDropdown } from '../../models/options-dropdown.model';

@Component({
  selector: 'app-dropdown',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
})
export class Dropdown {

  appearance = input<Appearance>('outline');
  label = input<string>('');
  disabled = input<boolean>(false);
  placeholder = input<string>('');
  options = input<OptionsDropdown[]>([]);
  multiple = input<boolean>(false);
  size = input<number>(100);

  value = model<string | string[]>('');
  multipleValue = model<string[]>([]);

  onSelectionChange(value: string ): void {
    if (this.multiple()) {
      this.multipleValue.set([...this.multipleValue(), value]);
    } else {
      this.value.set(value);
    }
  }
}