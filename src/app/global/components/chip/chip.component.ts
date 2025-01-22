import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'hec-chip',
  standalone: true,
  imports: [NgClass],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent {
  @Input() color: 'primary' | 'secondary' | 'success' | 'error' = 'primary';
  @Input() variant: 'filled' | 'outlined' = 'filled';
  @Input() size: 'small' | 'medium' = 'medium';
}
