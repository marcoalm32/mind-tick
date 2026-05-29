import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import("./auth/routes").then(m => m.routes)
    },
    {
        path: '',
        redirectTo: 'ideas',
        pathMatch: 'full'
    },
    {
        path: 'ideas',
        loadChildren: () => import("./core/routes").then(m => m.routes)
    }
];
