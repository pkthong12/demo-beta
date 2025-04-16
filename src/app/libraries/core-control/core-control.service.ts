import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ICoreFormSection } from '../../enum/enum-interfaces';

@Injectable()
export class CoreControlService {
  toFormGroup(sections: ICoreFormSection[]): any {
    if(typeof sections === 'string') sections = JSON.parse(sections);
    const group: any = {};
    if (!sections) return group;
    sections.forEach((section) => {
      const fields = section.rows;
      fields.forEach((row) => {
        row.forEach((column) => {
          if (!!column.validators) {
            const validatorArr: ValidatorFn[] = [];
            column.validators.map((x) => {
              validatorArr.push(x.validator);
            });
            group[column.field] = new FormControl(
              { value: column.value, disabled: !!column.disabled },
              validatorArr
            );
          } else {
            group[column.field] = new FormControl({
              value: column.value,
              disabled: !!column.disabled,
            });
          }
        });
      });
    });
    return group;
  }

  updateFormGroup(existingForm: FormGroup, newControls: { [key: string]: FormControl }) {
    Object.keys(newControls).forEach(key => {
      if (existingForm.controls[key]) {
        const oldControl = existingForm.get(key);
        const newControl = newControls[key];

        if (oldControl) {
          let hasChanges = false;

          // Cập nhật validators nếu thay đổi
          const oldValidators = oldControl.validator ? oldControl.validator({} as AbstractControl) : null;
          const newValidators = newControl.validator ? newControl.validator({} as AbstractControl) : null;
          if (JSON.stringify(oldValidators) !== JSON.stringify(newValidators)) {
            oldControl.setValidators(newControl.validator);
            hasChanges = true;
          }

          // Cập nhật async validators nếu thay đổi
          const oldAsyncValidators = oldControl.asyncValidator ? oldControl.asyncValidator({} as AbstractControl) : null;
          const newAsyncValidators = newControl.asyncValidator ? newControl.asyncValidator({} as AbstractControl) : null;
          if (JSON.stringify(oldAsyncValidators) !== JSON.stringify(newAsyncValidators)) {
            oldControl.setAsyncValidators(newControl.asyncValidator);
            hasChanges = true;
          }

          // Cập nhật giá trị nếu thay đổi
          if (oldControl.value !== newControl.value) {
            oldControl.setValue(newControl.value, { emitEvent: false });
            hasChanges = true;
          }

          // Cập nhật trạng thái enabled/disabled
          if (newControl.disabled && !oldControl.disabled) {
            oldControl.disable({ emitEvent: false });
            hasChanges = true;
          } else if (!newControl.disabled && oldControl.disabled) {
            oldControl.enable({ emitEvent: false });
            hasChanges = true;
          }

          if (hasChanges) {
            oldControl.updateValueAndValidity({ emitEvent: false });
          }
        }
      } else {
        existingForm.addControl(key, newControls[key]);
      }
    });

    existingForm.updateValueAndValidity({ emitEvent: false });
  }
}
