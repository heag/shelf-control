import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
  output,
} from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { FormControlBaseComponent } from '../core/form-control.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'hec-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './input.component.scss',
  providers: [
    FormGroupDirective,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    {
      provide: FormControlBaseComponent,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class InputComponent extends FormControlBaseComponent implements OnInit {
  @Input() color: 'primary' | 'secondary' | 'success' | 'error' = 'primary';
  @Input() type: 'text' | 'number' | 'password' | 'email' = 'text';
  @Input() variant: 'standard' | 'outline' = 'outline';
  @Input() size: 'medium' | 'large' | 'small' = 'medium';
  @Input() subscriptSizing: 'dynamic' | 'fixed' = 'dynamic';
  @Input() fluid: boolean;
  @Input() label: string = 'label';
  @Input() debounce = 350;
  @Input() placeholder: string = 'test';
  @Input() pattern: string | RegExp;
  valueChange = output<string>();

  ngOnInit(): void {
    this.trackFormValueChanges();
  }
  private trackFormValueChanges(): void {
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
