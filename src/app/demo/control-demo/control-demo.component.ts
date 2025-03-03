import { Component } from '@angular/core';
import { CoreFormComponent } from '../../libraries/core-form/core-form.component';
import { EnumFormBaseControlType, ICoreFormSection, IFnNameValidator } from '../../enum/enum-interfaces';
import { Validators } from '@angular/forms';

@Component({
  selector: 'control-demo',
  standalone: true,
  imports: [
    CoreFormComponent
  ],
  templateUrl: './control-demo.component.html',
  styleUrl: './control-demo.component.scss'
})
export class ControlDemoComponent {


  formName = 'dfd';

  sections: ICoreFormSection[] = [
    {
      rows: [
        [
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'textbox',
            label: 'TEXTBOX',
            value: 'dsdsds',
            type: 'text',
            flexSize: 3,
            readonly: true,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.CHECKBOX,
            field: 'checkbox',
            label: 'CHECKBOX',
            value: false,
            type: 'boolean',
            flexSize: 3,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'textbox1',
            label: 'TEXTBOX',
            value: '',
            type: 'text',
            flexSize: 3,
            readonly: true,
            hidden: false,
          }, {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'textbox2',
            label: 'TEXTBOX',
            value: '',
            type: 'text',
            flexSize: 3,
            readonly: false,
            hidden: false,
            validators: [
              {
                name: IFnNameValidator.required,
                validator: Validators.required,
                errorMessage: 'This field is required'
              }
            ]
          },
        ]
      ]
    }
  ];
}
