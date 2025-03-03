import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CoreCheckBoxComponent } from '../core-check-box/core-check-box.component';
import { CoreTextBoxComponent } from '../core-text-box/core-text-box.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../base-component/base-component.component';
import { CommonModule } from '@angular/common';
import { EnumFormBaseControlType, IFnNameValidator, IFormBaseControl } from '../../enum/enum-interfaces';
import { ValidatorFn } from "@angular/forms";

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

  isRequired: boolean = false;

  ngOnInit(): void {
    this.onCreatedRequired();
  }
  ngOnDestroy(): void {
  }

  onCreatedRequired() {
    if (this.control.validators) {
      this.isRequired = this.control.validators.some(x => x.name === IFnNameValidator.required);
    }
  }
}
