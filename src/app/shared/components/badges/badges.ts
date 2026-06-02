import { Component, computed, input } from '@angular/core';
import { ColorType } from '../../types/color';
import { SizeType } from '../../types/size';

@Component({
  selector: 'app-badges',
  imports: [],
  templateUrl: './badges.html',
  styleUrl: './badges.scss',
})
export class Badges {
  text = input<string>('');
  colorType = input<ColorType>('primary');
  size = input<SizeType>('small');

  badgeClass = computed(() => `badges badges-${this.colorType()} badges-${this.size()}`);
}
