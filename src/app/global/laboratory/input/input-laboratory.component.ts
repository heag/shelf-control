import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'hec-input-laboratory',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './input-laboratory.component.html',
  styleUrl: './input-laboratory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLaboratoryComponent {
  formGroup = new FormGroup({
    nameControl: new FormControl(''),
  });
}
