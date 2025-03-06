import { Routes } from '@angular/router';
import { ControlDemoComponent } from './control-demo/control-demo.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "button-style",
        pathMatch: "full",
    },
    {
        path: 'control',
        loadComponent() {
            return import('./control-demo/control-demo.component').then(m => m.ControlDemoComponent);
        }
    },
    {
        path: 'button-style',
        loadComponent() {
            return import('./button-style/button-style.component').then(m => m.ButtonStyleComponent);
        }
    }
];
