import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class CoreCheckBoxComponent extends CoreFormControlBaseComponent implements OnInit, OnChanges {
  @Input() text!: string;
  @Input() inputValue!: boolean;

  @Output() onClick = new EventEmitter<boolean>();


  ngOnChanges(e: SimpleChanges): void {
    if (!!e['inputValue'])
      this.writeValue(e['inputValue'].currentValue)
  }
  ngOnInit(): void {
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
