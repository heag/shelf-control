import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { FormControlBaseComponent } from '../core/form-control.component';

@Component({
   selector: 'hec-checkbox',
   standalone: true,
   imports: [MatCheckboxModule, NgClass, ReactiveFormsModule, FormsModule],
   providers: [
      {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => CheckboxComponent),
         multi: true,
      },
      {
         provide: FormControlBaseComponent,
         useExisting: forwardRef(() => CheckboxComponent),
      },
   ],
   templateUrl: './checkbox.component.html',
   styleUrls: ['./checkbox.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent extends FormControlBaseComponent implements OnInit {   
   @Input() size: 'success' | 'medium' | 'large' = 'medium';
   @Input() type: 'primary' | 'secondary' | 'success' | 'error' = 'primary';
   @Input() label: string;
   @Input() debounce = 350;
   @Input() indeterminate = false;
   valueChange = output<string>();

   ngOnInit(): void {
      this.observeValueChanges();
   }

   private observeValueChanges(): void {
      this.formControl.valueChanges
         .pipe(debounceTime(this.debounce), distinctUntilChanged(), takeUntil(this.destroy$))
         .subscribe((value) => {
            this.valueChange.emit(value);
         });
   }
}
