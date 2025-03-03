import { Component, OnInit } from '@angular/core';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppLayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
