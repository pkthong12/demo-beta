import { Component, ViewEncapsulation } from '@angular/core';
import { CoreButtonDemoComponent } from '../core-button-demo/core-button-demo.component';
import { EButtonSize, EButtonType } from '../../enum/enum-button';

@Component({
  selector: 'app-button-style',
  standalone: true,
  imports: [
    CoreButtonDemoComponent
  ],
  templateUrl: './button-style.component.html',
  styleUrl: './button-style.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonStyleComponent {
  size = EButtonSize.SMALL;
  theme = EButtonType.SUCCESS;
}
