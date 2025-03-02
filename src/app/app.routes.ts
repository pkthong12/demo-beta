import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/demo",
        pathMatch: "full",
      },
    {
        path: 'demo',
        loadChildren: () => import("./demo/demo.routes").then(m => m.routes),
    },
];
