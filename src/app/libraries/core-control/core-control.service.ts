import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
import { ICoreFormSection } from '../../enum/enum-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CoreControlService {
  constructor() { }

  toGroup(sections: ICoreFormSection[]): any {
    const group: any = {};

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
              { value: column.value, disabled: !!column.disabled || !!column.readonly },
              validatorArr
            );
          } else {
            group[column.field] = new FormControl({
              value: column.value,
              disabled: !!column.disabled || !!column.readonly,
            });
          }
        });
      });
    });

    return group;
  }
}
