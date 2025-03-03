import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICoreFormSection } from '../../enum/enum-interfaces';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreControlService } from '../core-control/core-control.service';
import { CommonModule } from '@angular/common';
import { CoreControlComponent } from '../core-control/core-control.component';

@Component({
  selector: 'core-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreControlComponent
  ],
  templateUrl: './core-form.component.html',
  styleUrl: './core-form.component.scss'
})
export class CoreFormComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy  {
  @Input() formName!: string;
  @Input() inputSections!: ICoreFormSection[];

  @Output() onFormCreated = new EventEmitter<any>();
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() buttonClick = new EventEmitter<any>();

  form!: FormGroup;
  sections!: ICoreFormSection[];

  /**
   *
   */
  constructor(
    private coreControlService: CoreControlService,
  ) {
  }
  private updateSections(newSections: ICoreFormSection[]): void {

    this.sections.map((section, sectionIndex) => {
      const newSection = newSections[sectionIndex];
      section.rows.map((row, rowIndex) => {
        const newRow = newSection.rows[rowIndex];
        row.map((control, controlIndex) => {
          const newControl = newRow[controlIndex];
          control.hidden = newControl?.hidden;
        });
      });

    });

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputSections']) {
      let newSections: ICoreFormSection[] =
        changes['inputSections'].currentValue;

      if (!!!this.form) {
        this.sections = newSections;

        let form: FormGroup<any>;

        const mainGroup = this.coreControlService.toGroup(this.sections);

        form = new FormGroup(mainGroup);

        this.form = form;

      } else {
        this.updateSections(newSections);
      }
      console.log(this.form)
      this.onFormCreated.emit({
        formName: this.formName,
        formGroup: this.form,
      });
    }
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }
  ngOnDestroy(): void {
  }

  onFormSubmit() {
    if (!!this.form.valid) {
      this.onSubmit.emit(this.form?.getRawValue());
    }
  }
}
