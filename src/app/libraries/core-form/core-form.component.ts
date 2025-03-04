import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, EventEmitter, input, Input, OnChanges, OnDestroy, OnInit, output, Output, signal, SimpleChanges } from '@angular/core';
import { ICoreFormSection } from '../../enum/enum-interfaces';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreControlService } from '../core-control/core-control.service';
import { CommonModule } from '@angular/common';
import { CoreControlComponent } from '../core-control/core-control.component';
import { BehaviorSubject } from 'rxjs';
import { BaseComponent } from '../base-component/base-component.component';

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
  formName = input<string>();
  inputSections = input.required<ICoreFormSection[]>();
  @Input() checkError$ = new BehaviorSubject<boolean>(false);

  onFormCreated = output<any>();
  onSubmit = output<any>();
  onCancel = output<any>();
  buttonClick = output<any>();

  form!: FormGroup;
  sections = this.inputSections;
  prevSections!: ICoreFormSection[];
  /**
   *
   */
  constructor(
    private coreControlService: CoreControlService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
    effect(() => {
      this.onBuildForm();
    })
  }
  //with signal, this is not necessary
  // updateSections(newSections: ICoreFormSection[]): void {
  //   this.sections().map((section, sectionIndex) => {
  //     const newSection = newSections[sectionIndex];
  //     section.rows.map((row, rowIndex) => {
  //       const newRow = newSection.rows[rowIndex];
  //       row.map((control, controlIndex) => {
  //         const newControl = newRow[controlIndex];
  //         control.hidden = newControl?.hidden;
  //       });
  //     });

  //   });

  // }
  onBuildForm(): void {
    let newSections: ICoreFormSection[] = this.inputSections();
    if (!this.form && JSON.stringify(newSections) !== JSON.stringify(this.prevSections)) {
      let form: FormGroup<any>;
      const mainGroup = this.coreControlService.toFormGroup(newSections);
      form = new FormGroup(mainGroup);
      this.form = form;
    } else {
      const newControls = this.coreControlService.toFormGroup(this.sections());
      this.coreControlService.updateFormGroup(this.form, newControls);
      // this.updateSections(newSections);
    }

    this.prevSections = newSections;
    this.onFormCreated.emit({
      formName: this.formName,
      formGroup: this.form,
    });

    this.changeDetectorRef.detectChanges();

  }
  onFormSubmit() {
    this.checkError$.next(true);
    if (!!this.form.valid) {
      this.onSubmit.emit(this.form?.getRawValue());
    }
  }
  onFormReset() {
    this.form.reset();
    this.checkError$.next(false);
  }
}
