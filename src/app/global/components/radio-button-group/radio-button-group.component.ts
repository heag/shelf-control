import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
  output,
} from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatError } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { FormControlBaseComponent } from '../core/form-control.component';

@Component({
  selector: 'radio-button-group',
  standalone: true,
  imports: [
    MatRadioModule,
    NgClass,
    ReactiveFormsModule,
    MatError,
    FormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonGroupComponent),
      multi: true,
    },
    {
      provide: FormControlBaseComponent,
      useExisting: forwardRef(() => RadioButtonGroupComponent),
    },
  ],
  templateUrl: './radio-button-group.component.html',
  styleUrl: './radio-button-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonGroupComponent
  extends FormControlBaseComponent
  implements OnInit
{
  @Input() type: 'primary' | 'secondary' | 'success' | 'error' = 'primary';
  @Input() labelPosition: 'before' | 'after' | 'top' = 'after';
  @Input({ required: true }) options: string[] = [];
  @Input() debounce = 350;
  valueChange = output<boolean>();

  ngOnInit(): void {
    this.trackValueChanges();
  }

  private trackValueChanges(): void {
    this.formControl.valueChanges
      .pipe(
        debounceTime(this.debounce),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((value) => {
        this.valueChange.emit(value);
      });
  }
}
