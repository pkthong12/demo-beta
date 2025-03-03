import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
import { ICoreFormSection } from '../../enum/enum-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CoreControlService {
  constructor() { }

  toFormGroup(sections: ICoreFormSection[]): any {
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
}
