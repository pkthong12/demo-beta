import { Component } from '@angular/core';
import { CoreFormComponent } from '../../libraries/core-form/core-form.component';
import { EnumFormBaseControlType, ICoreFormSection, IFnNameValidator, IFormBaseControl } from '../../enum/enum-interfaces';
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

  formName = 'DEMO';

  sectionsTxt: ICoreFormSection[] = [
    {
      caption: 'For TextBox',
      rows: [
        [
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'controlType',
            label: 'controlType',
            value: 'TEXTBOX',
            type: 'text',
            flexSize: 12,
            readonly: false,
            hidden: true,
          },
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'textbox',
            label: 'field',
            value: 'TEXTBOX',
            type: 'text',
            flexSize: 12,
            readonly: false,
            hidden: true,
          },
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'label',
            label: 'Label',
            value: '',
            type: 'text',
            flexSize: 12,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'type',
            label: 'Type',
            value: null,
            type: 'text',
            flexSize: 12,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'flexSize',
            label: 'Flex Size',
            value: null,
            type: 'number',
            flexSize: 12,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.CHECKBOX,
            field: 'required',
            label: 'Required',
            value: false,
            type: 'boolean',
            flexSize: 4,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.CHECKBOX,
            field: 'disabled',
            label: 'Disabled',
            value: false,
            type: 'boolean',
            flexSize: 4,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.CHECKBOX,
            field: 'readonly',
            label: 'Readonly',
            value: false,
            type: 'boolean',
            flexSize: 4,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.CHECKBOX,
            field: 'hidden',
            label: 'Hidden',
            value: false,
            type: 'boolean',
            flexSize: 4,
            readonly: false,
            hidden: false,
          }
        ]
      ]
    }
  ];
  sectionsCkb: ICoreFormSection[] = [
    {
      caption: 'For Checkbox',
      rows: [
        [
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'controlType',
            label: 'Label',
            value: 'CHECKBOX',
            type: 'text',
            flexSize: 12,
            readonly: false,
            hidden: true,
          },
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'checkbox',
            label: 'field',
            value: 'TEXTBOX',
            type: 'text',
            flexSize: 12,
            readonly: false,
            hidden: true,
          },
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'label',
            label: 'Label',
            value: '',
            type: 'text',
            flexSize: 12,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'flexSize',
            label: 'Flex Size',
            value: null,
            type: 'number',
            flexSize: 12,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.CHECKBOX,
            field: 'disabled',
            label: 'Disabled',
            value: false,
            type: 'boolean',
            flexSize: 4,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.CHECKBOX,
            field: 'readonly',
            label: 'Readonly',
            value: false,
            type: 'boolean',
            flexSize: 4,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.CHECKBOX,
            field: 'hidden',
            label: 'Hidden',
            value: false,
            type: 'boolean',
            flexSize: 4,
            readonly: false,
            hidden: false,
          }
        ]
      ]
    }
  ];
  sections: ICoreFormSection[] = [
    {
      caption: 'For Preview',
      rows: [
        [
          {
            controlType: EnumFormBaseControlType.TEXTBOX,
            field: 'textbox',
            label: 'TEXTBOX',
            value: '',
            type: 'text',
            flexSize: 4,
            readonly: false,
            hidden: false,
          },
          {
            controlType: EnumFormBaseControlType.CHECKBOX,
            field: 'checkbox',
            label: 'CHECKBOX',
            value: false,
            type: 'boolean',
            flexSize: 4,
            readonly: false,
            hidden: false,
          }
        ]
      ]
    }
  ];

  onSubmitTxt($event: any) {
    let control: IFormBaseControl = this.convertToControl($event);
    this.sections[0].rows[0][0] = control;
  }


  onSubmitCkb($event: any) {
    let control: IFormBaseControl = this.convertToControl($event);
    this.sections[0].rows[0][1] = control;
  }
  onCancel($event: any) {
  }
  convertToControl(control: any): IFormBaseControl {
    control.validators = [];
    if (control.required) {
      control.validators.push({
        name: IFnNameValidator.required,
        validator: Validators.required,
        errorMessage: 'This field is required'
      })
    }
    return control as IFormBaseControl;
  }

}
