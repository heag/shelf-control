import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'hec-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HecButtonComponent {

  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Input() type: 'primary' | 'secondary' | 'success' | 'error' = 'primary';

  @Input() variant: 'contained' | 'outline' | 'text' = 'contained';

  @Input() disabled: boolean;

  @Input() fluid: boolean;
}
