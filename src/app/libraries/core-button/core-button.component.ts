import { Component, computed, input, output } from '@angular/core';
import { EButtonType, EButtonSize } from '../../enum/enum-button';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  template: '',
})
export abstract class CoreButtonComponent extends BaseComponent {
  // Input properties
  theme = input<EButtonType>(EButtonType.PRIMARY);
  size = input<EButtonSize>(EButtonSize.MEDIUM);

  // Output signals
  handleButtonClick = output<void>();
  handleButtonHover = output<boolean>()

  buttonClass = computed(() =>
    `btn btn-${this.theme()} btn-${this.size()}`
  );


  // Abstract methods
  abstract onClick(): void;
  abstract onHover(isHovered: boolean): void;
  abstract onFocus(): void;
  abstract onBlur(): void;
}
