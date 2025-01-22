import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChipComponent } from '../../components/chip/chip.component';

@Component({
  selector: 'hec-chip-laboratory',
  standalone: true,
  imports: [ChipComponent],
  templateUrl: './chip-laboratory.component.html',
  styleUrl: './chip-laboratory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipLaboratoryComponent {

}
