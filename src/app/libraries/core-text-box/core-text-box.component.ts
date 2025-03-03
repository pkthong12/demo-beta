import { Component, input, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CoreFormControlBaseComponent } from '../core-form-control-base/core-form-control-base.component';
import { IFormBaseControl } from '../../enum/enum-interfaces';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'core-text-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CoreTextBoxComponent
    }
  ],
  templateUrl: './core-text-box.component.html',
  styleUrl: './core-text-box.component.scss'
})
export class CoreTextBoxComponent extends CoreFormControlBaseComponent implements OnInit, OnChanges, OnDestroy {
  control = input.required<IFormBaseControl>();
  inputValue= input.required<any>();
  ngOnChanges(e: SimpleChanges): void {
    if (e['inputValue'])
      this.writeValue(e['inputValue'].currentValue)
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}