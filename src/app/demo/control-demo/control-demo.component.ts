import { Component } from '@angular/core';
import { CoreFormComponent } from '../../libraries/core-form/core-form.component';
import { EnumFormBaseControlType, ICoreFormSection } from '../../enum/enum-interfaces';

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
            value: '',
            type:'text',
            flexSize: 3,
            readonly: true,
            hidden:false,
          },
          {
            controlType: EnumFormBaseControlType.CHECKBOX,
            field: 'checkbox',
            label: 'CHECKBOX',
            value: '',
            type:'text',
            flexSize: 3,
            readonly: true,
            hidden:false,
          }
        ]
      ]
    }
  ];
}
