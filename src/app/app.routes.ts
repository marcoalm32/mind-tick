import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import("./auth/routes").then(m => m.routes)
    },
    {
        path: '',
        loadChildren: () => import("./core/routes").then(m => m.routes)
    }
];
