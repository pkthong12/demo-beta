import { Component, computed, input, output } from '@angular/core';
import { EButtonType, EButtonSize, EButtonState } from '../../enum/enum-button';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  template: '',
})
export abstract class CoreButtonComponent {
  // Input properties
  theme = input<EButtonType | undefined>();
  size = input<EButtonSize>(EButtonSize.MEDIUM);
  state = input<EButtonState>(EButtonState.NONE);

  // Output signals
  handleButtonClick = output<void>();
  handleButtonHover = output<boolean>()
  handleButtonFocus = output<void>()
  handleButtonBlur = output<void>()

  buttonClass = computed(() => {
    return {
      btn: true,
      [`btn-${this.theme()}`]: !!this.theme(),
      [`btn-${this.theme()}-${this.state()}`]: !!this.theme() && !!this.state(),
      [`btn-${this.size()}`]: !!this.size(),
    }
  }
  );
  // Abstract methods
  abstract onClick(): void;
  abstract onHover(isHovered: boolean): void;
  abstract onFocus(): void;
  abstract onBlur(): void;
}
