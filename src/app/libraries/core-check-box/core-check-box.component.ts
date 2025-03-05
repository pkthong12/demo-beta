import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, input, Input, OnChanges, OnDestroy, OnInit, output, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CoreFormControlBaseComponent } from '../core-form-control-base/core-form-control-base.component';

@Component({
  selector: 'core-check-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CoreCheckBoxComponent
    }
  ],
  templateUrl: './core-check-box.component.html',
  styleUrl: './core-check-box.component.scss'
})
export class CoreCheckBoxComponent extends CoreFormControlBaseComponent {
  text = input<string>('');
  inputValue = input<boolean>(false);
  @Input({ transform: (value: any) => value !== null && value !== undefined ? value : false }) override disabled!: boolean;
  onClick = output<boolean>();


  constructor() {
    super();
    effect(() => {
      this.writeValue(this.inputValue());
    });
  }
  onLabelClick(_: any) {
    if (this.disabled == true || this.readonly == true) {
      return
    }
    this.value = !this.value;
    this.onClick.emit(this.value);
    this.markAsTouched();
    this.onChange(this.value);
  }

}
