import { Component, computed, input, output } from '@angular/core';
import { EButtonType, EButtonSize, EButtonState } from '../../enum/enum-button';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  template: '',
})
export abstract class CoreButtonComponent extends BaseComponent {
  // Input properties
  theme = input<EButtonType>(EButtonType.PRIMARY);
  size = input<EButtonSize>(EButtonSize.MEDIUM);
  state = input<EButtonState>(EButtonState.NONE);

  // Output signals
  handleButtonClick = output<void>();
  handleButtonHover = output<boolean>()

  buttonClass = computed(() => {
    let classStyle = `btn `;
    if (this.theme()) {
      classStyle += ` btn-${this.theme()}`;
      if (this.state() && this.state() !== EButtonState.NONE) classStyle += `-${this.state()}`;
    }
    if (this.size() && this.size() !== EButtonSize.MEDIUM) classStyle += ` btn-${this.size()}`;
    return classStyle;
  }
  );


  // Abstract methods
  abstract onClick(): void;
  abstract onHover(isHovered: boolean): void;
  abstract onFocus(): void;
  abstract onBlur(): void;
}
