import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';

@Component({
  selector: 'hec-checkbox-laboratory',
  standalone: true,
  imports: [CheckboxComponent, ReactiveFormsModule],
  templateUrl: './checkbox-laboratory.component.html',
  styleUrl: './checkbox-laboratory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxLaboratoryComponent {
  formGroup = new FormGroup({
    checkTrueControl: new FormControl(true),
    checkFalseControl: new FormControl(false),
  });

  sizesFormGroup = new FormGroup({
    checkTrueControl: new FormControl(true),
    checkFalseControl: new FormControl(false),
  });
}
