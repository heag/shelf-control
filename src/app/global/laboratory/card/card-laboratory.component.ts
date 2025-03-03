import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'hec-card-laboratory',
  imports: [CardComponent],
  templateUrl: './card-laboratory.component.html',
  styleUrl: './card-laboratory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardLaboratoryComponent {

}
