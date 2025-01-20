import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HecButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'hec-button-laboratory',
  standalone: true,
  imports: [HecButtonComponent],
  templateUrl: './button-laboratory.component.html',
  styleUrl: './button-laboratory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonLaboratoryComponent {
}
