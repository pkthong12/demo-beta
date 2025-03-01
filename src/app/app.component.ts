import { Component, OnInit } from '@angular/core';
import { CoreControlComponent } from './libraries/core-control/core-control.component';
import { EnumFormBaseContolType, ICoreFormSection, IFormBaseControl } from './enum/enum-interfaces';
import { CoreControlService } from './libraries/core-control/core-control.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CoreControlComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  sections: ICoreFormSection[] = [
    {
      rows: [
        [
          {
            controlType: EnumFormBaseContolType.TEXTBOX,
            label: 'First name',
            value: '',
            flexSize: 12,
            field: 'firstName'
          },
          {
            controlType: EnumFormBaseContolType.TEXTBOX,
            label: 'Last name',
            value: '',
            flexSize: 12,
            field: 'lastName'
          }
        ]
      ]
    }
  ];

  constructor(private coreControlService: CoreControlService) {

  }

  ngOnInit(): void {
    console.log(this.coreControlService.toGroup(this.sections));
  }
}
