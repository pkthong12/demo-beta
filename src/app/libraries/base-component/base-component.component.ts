import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'base-component',
  standalone: true,
  imports: [],
  templateUrl: './base-component.component.html',
  styleUrl: './base-component.component.scss'
})
export class BaseComponent implements OnDestroy {
  subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.map(x => x?.unsubscribe());
  }

}
