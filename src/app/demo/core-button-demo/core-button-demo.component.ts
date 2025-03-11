import { Component } from '@angular/core';
import { CoreButtonComponent } from '../../libraries/core-button/core-button.component';

@Component({
  selector: 'core-button-demo',
  standalone: true,
  imports: [],
  templateUrl: './core-button-demo.component.html',
  styleUrl: './core-button-demo.component.scss'
})
export class CoreButtonDemoComponent extends CoreButtonComponent {
  override onClick(): void {
  }
  override onHover(isHovered: boolean): void {
  }
  override onFocus(): void {
  }
  override onBlur(): void {
  }

}
