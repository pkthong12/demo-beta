import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'core-form-control-base',
  templateUrl: './core-form-control-base.component.html',
  styleUrls: ['./core-form-control-base.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CoreFormControlBaseComponent
    }
  ]
})
export class CoreFormControlBaseComponent implements ControlValueAccessor {

  value: any;

  onChange = (_: any) => { };

  onTouched = () => { };

  touched: boolean = false;

  disabled: boolean = false;

  readonly: boolean = false;

  constructor() {
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
