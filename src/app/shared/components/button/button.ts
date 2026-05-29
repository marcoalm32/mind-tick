import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ColorType } from '../../types/color';

@Component({
  selector: 'app-button',
  imports: [
    NgClass,
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  label = input<string>('Button');
  color = input<ColorType>('primary');
  size = input<string>('medium');
  variant = input<string>('contained');
  disabled = input<boolean>(false);
  icon = input<string | null>(null);
  width = input<number>(100);
  type = input<string>('button');

  onClick = output<void>();

  confirmClick(): void {
    this.onClick.emit();
  }
}
