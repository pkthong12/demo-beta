import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, inject, input, Input, output, signal } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ICoreFormSection } from '../../enum/enum-interfaces';
import { BaseComponent } from '../base-component/base-component.component';
import { CoreControlComponent } from '../core-control/core-control.component';
import { CoreControlService } from '../core-control/core-control.service';
import { ICoreFormSectionE } from './core-form.stories';

@Component({
  selector: 'core-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreControlComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './core-form.component.html',
  styleUrl: './core-form.component.scss'
})
export class CoreFormComponent extends BaseComponent {

  private coreControlService = inject(CoreControlService);
  private changeDetectorRef = inject(ChangeDetectorRef);


/** The list of tasks */
  formName = input<string>();
  flexDirection = input<string>('row');
  private _inputSections = signal<ICoreFormSection[]>(null!);
  @Input()

  set inputSections(value: ICoreFormSection[]) {
    debugger
    this._inputSections.set(value);
  }
  /** The list of tasks */
  get inputSections(): ICoreFormSection[] {
    return this._inputSections();
  }

  iCoreFormSectionE = input<ICoreFormSectionE>();

  @Input() checkError$ = new BehaviorSubject<boolean>(false);

  onFormCreated = output<any>();
  onSubmit = output<any>();
  onCancel = output<any>();
  buttonClick = output<any>();

  form!: FormGroup;
  sections = computed(() => this._inputSections());
  prevSections!: ICoreFormSection[];

  payLoad!: any;

  /**
   *
   */
  constructor(
  ) {
    super();
    effect(() => {
      this.onBuildForm();
      debugger
    })
  }

  private onBuildForm(): void {
    console.log(this._inputSections());
    const mainGroup = this.coreControlService.toFormGroup(this._inputSections());
    if (!this.form && JSON.stringify(this._inputSections()) !== JSON.stringify(this.prevSections)) {
      this.form = new FormGroup(mainGroup);
    } else {
      this.coreControlService.updateFormGroup(this.form, mainGroup);
    }

    this.prevSections = this._inputSections();
    this.onFormCreated.emit({
      formName: this.formName,
      formGroup: this.form,
    });

    this.changeDetectorRef.detectChanges();

  }
  onFormSubmit() {
    this.checkError$.next(true);
    this.payLoad = JSON.stringify(this.form.getRawValue(), (key, value) =>
      value === undefined ? null : value, 2);
    if (!!this.form.valid) {
      this.onSubmit.emit(this.form?.getRawValue());
    }
  }
  onFormReset() {
    this.form.reset();
    this.checkError$.next(false);
  }
}
