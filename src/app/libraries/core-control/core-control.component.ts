import { AfterViewInit, Component, effect, input, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
import { CoreCheckBoxComponent } from '../core-check-box/core-check-box.component';
import { CoreTextBoxComponent } from '../core-text-box/core-text-box.component';
import { AbstractControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../base-component/base-component.component';
import { CommonModule } from '@angular/common';
import { IError, IFnNameValidator, IFormBaseControl } from '../../enum/enum-interfaces';
import { BehaviorSubject } from 'rxjs';


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
export class CoreControlComponent extends BaseComponent implements OnInit {
  control = input.required<IFormBaseControl>();
  form = input.required<FormGroup>();
  @Input() checkError$!: BehaviorSubject<boolean>;

  rawControl = signal<AbstractControl | null>(null);
  isRequired = signal<boolean>(false);
  errors = signal<IError[]>([]);

  constructor() {
    super();
    effect(() => {
      this.onCreatedRequired();
      this.watchRawControlStatus();
      this.watchCheckError();
    }, { allowSignalWrites: true });
  }

  ngOnInit() {
    this.onCreatedRequired();
    this.rawControl.set(this.form().get(this.control().field) ?? null);
  }

  watchRawControlStatus(): void {
    const control = this.rawControl();
    if (!control) return;
    control.statusChanges.subscribe(() => this.checkError());
  }

  watchCheckError(): void {
    if (!this.checkError$) return;
    this.checkError$.subscribe((checkError) => {
      checkError ? this.checkError() : this.resetError();
    });
  }

  checkError(): void {
    const control = this.rawControl();
    if (!control || !control.errors) {
      this.errors.set([]);
      return;
    }
    const newErrors: IError[] = [];
    Object.keys(control.errors).forEach((key) => {
      const errorValue = control.errors![key];
      if (Array.isArray(errorValue)) {
        newErrors.push({ key, errorMessage: errorValue[1] });
      } else {
        const validator = this.control().validators?.find(v => v.name.toLowerCase() === key.toLowerCase());
        if (validator) {
          newErrors.push({ key, errorMessage: validator.errorMessage! });
        }
      }
    });

    this.errors.set(newErrors);
  }

  resetError(): void {
    this.errors.set([]);
  }

  onCreatedRequired(): void {
    this.isRequired.set(this.control().validators?.some(x => x.name === IFnNameValidator.required) ?? false);
  }
  onFocus(e: any) {
    if (this.control().disabled || this.control().readonly) return;
    this.control().focus$?.next(e);
  }

  onBlur(e: any) {
    if (this.control().disabled || this.control().readonly) return;
    const control = this.form().get(this.control().field);
    this.control().blur$?.next(e);
    if (control && control.invalid) {
      control.markAsTouched();
    }
  }
}
