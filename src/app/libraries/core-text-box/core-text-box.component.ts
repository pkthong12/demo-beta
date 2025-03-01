import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CoreFormControlBaseComponent } from '../core-form-control-base/core-form-control-base.component';
import { IFormBaseControl } from '../../enum/enum-interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'core-text-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './core-text-box.component.html',
  styleUrl: './core-text-box.component.scss'
})
export class CoreTextBoxComponent extends CoreFormControlBaseComponent implements OnInit, OnChanges, OnDestroy {
  @Input() control!: IFormBaseControl;
  @Input() inputValue!: boolean;
  ngOnChanges(e: SimpleChanges): void {
    if (!!e['inputValue'])
      this.writeValue(e['inputValue'].currentValue)
  }
  ngOnInit(): void {
  }
  override writeValue(obj: boolean): void {
    this.value = obj;
  }
  ngOnDestroy(): void {
  }
}
