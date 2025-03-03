import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'hec-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() title: string;
  @Input() type: 'parent' | 'child' = 'parent';
  @Input() headingAriaLevel = 2;
}
