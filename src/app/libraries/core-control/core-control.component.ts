import { Component, effect, input, Input, OnDestroy, OnInit } from '@angular/core';
import { CoreCheckBoxComponent } from '../core-check-box/core-check-box.component';
import { CoreTextBoxComponent } from '../core-text-box/core-text-box.component';
import { AbstractControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../base-component/base-component.component';
import { CommonModule } from '@angular/common';
import { IFnNameValidator, IFormBaseControl } from '../../enum/enum-interfaces';
import { BehaviorSubject } from 'rxjs';

interface IError {
  key: string,
  errorMessage: string
}

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
  control = input.required<IFormBaseControl>();
  @Input() form!: FormGroup;
  @Input() checkError$!: BehaviorSubject<boolean>;

  rawControl!: AbstractControl;

  isRequired: boolean = false;
  errors: IError[] = [];

  constructor() {
    super();
    effect(() => {
      this.onCreatedControl();
    });
  }

  ngOnInit(): void {
    this.onCreatedControl();
  }
  onCreatedControl(): void {
    this.onCreatedRequired();

    this.rawControl = this.form.get(this.control().field)!;

    this.subscriptions.push(
      this.rawControl?.statusChanges.subscribe(_ => {
        this.checkError();
      }),
    )
    if (!!this.checkError$) {
      this.subscriptions.push(
        this.checkError$.subscribe(x => {
          if (x) {
            this.checkError();
          } else {
            this.resetError();
          }
        })
      )
    }
  }
  checkError(): void {
    if (this.rawControl.errors) {
      const newErrors: IError[] = [];
      Object.keys(this.form.controls[this.control().field].errors!).forEach(key => {

        if (this.form.controls[this.control().field].errors![key] instanceof Array) {
          newErrors.push({
            key: key,
            errorMessage: this.form.controls[this.control().field].errors![key][1]
          })
        } else {
          if (!!this.control().validators) {
            const filter = this.control().validators?.filter(x => x.name.toLowerCase() === key.toLowerCase())
            if (!filter || !filter.length) {
              return;
            }
            if (!!filter.length) {
              newErrors.push({
                key: key,
                errorMessage: filter![0].errorMessage!
              })
            }
          }
        }
      })
      this.errors = newErrors;
    } else {
      this.errors = [];
    }
  }

  resetError(): void {
    this.errors = [];
  }

  onCreatedRequired(): void {
    if (this.control().validators) {
      this.isRequired = this.control().validators?.some(x => x.name === IFnNameValidator.required) || false;
    }
  }

  onFocus(e: any) {
    if (this.control().disabled || this.control().readonly) return;
    this.control().focus$?.next(e);
  }

  onBlur(e: any) {
    if (this.control().disabled || this.control().readonly) return;
    const control = this.form.get(e);
    this.control().blur$?.next(e);
    if (control && control.invalid) {
      control.markAsTouched();
    }
  }
}
