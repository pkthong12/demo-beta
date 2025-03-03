import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CoreCheckBoxComponent } from '../core-check-box/core-check-box.component';
import { CoreTextBoxComponent } from '../core-text-box/core-text-box.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../base-component/base-component.component';
import { CommonModule } from '@angular/common';
import { EnumFormBaseControlType, IFormBaseControl } from '../../enum/enum-interfaces';

@Component({
  selector: 'core-control',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreTextBoxComponent,
    CoreCheckBoxComponent
  ],
  templateUrl: './core-control.component.html',
  styleUrl: './core-control.component.scss'
})
export class CoreControlComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() control!: IFormBaseControl;
  @Input() form!: FormGroup;

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
