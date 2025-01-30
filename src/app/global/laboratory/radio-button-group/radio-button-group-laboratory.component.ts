import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RadioButtonGroupComponent } from '../../components/radio-button-group/radio-button-group.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'hec-radio-button-group-laboratory',
  standalone: true,
  imports: [RadioButtonGroupComponent, ReactiveFormsModule],
  templateUrl: './radio-button-group-laboratory.component.html',
  styleUrl: './radio-button-group-laboratory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonGroupLaboratoryComponent {
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  formGroup = new FormGroup({
    seasonControl: new FormControl(),
  });

  formGroupSimple = new FormGroup({
    simpleControl: new FormControl(),
  });
}
