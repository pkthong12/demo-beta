import { Routes } from '@angular/router';
import { ControlDemoComponent } from './control-demo/control-demo.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "control",
        pathMatch: "full",
      },
    {
        path: 'control',
        component: ControlDemoComponent,
    }
];
