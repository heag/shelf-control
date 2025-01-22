import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { BaseComponent } from './base.component';

@Component({
  template: '',
  standalone: true,
})
export abstract class FormControlBaseComponent
  extends BaseComponent
  implements ControlValueAccessor
{
  @Input({ required: true }) formControl: FormControl;

  private val: any;

  set value(val: string | undefined) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnTouched(func: any) {
    this.onTouch = func;
  }

  registerOnChange(func: any) {
    this.onChange = func;
  }

  onChange: any = () => {};
  onTouch: any = () => {};
}
