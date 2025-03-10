import { Component, computed, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.scss',
})
export class SignalComponent {
  count = 0;
  countSignal = signal(0);
  countComp = computed(() => this.countSignal() * 2);
  countCompFormEffect = 1;

  constructor() {
    effect(() => {
      this.countCompFormEffect = this.count * this.countComp();
    })
  }

  increment() {
    this.count += 1;
    this.countSignal.update(value => value + 1);
  }
}
   