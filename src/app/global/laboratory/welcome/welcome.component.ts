import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hec-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeLaboratoryComponent {

}
