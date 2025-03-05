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
        loadComponent() {
            return import('./control-demo/control-demo.component').then(m => m.ControlDemoComponent);
        }
    }
];
