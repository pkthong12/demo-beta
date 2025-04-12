import { ChangeDetectionStrategy, Component, computed, effect, signal, untracked } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  count = 0;
  countSignal = signal(0);
  countComp = computed(() => this.countSignal() * 2);
  countCompFormEffect = 1;

  demo = signal({ name: 'signal-dem' });

  timer$ = interval(1000);
  // toSignalTimer = toSignal(this.timer$);


  constructor() {
    effect(() => {
      untracked(() => {
        this.count * this.countComp()
      })
    }, {})

    setTimeout(() => {
      this.demo.set({ name: '' });
    }, 1000)
  }

  increment() {
    this.count += 1;
    this.countSignal.update(value => value + 1);
  }
}
