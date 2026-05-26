import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./components/main-layout/main-layout").then(m => m.MainLayout),
        children: [
            {
                path: '',
                loadChildren: () => import("../ideas/routes").then(m => m.routes)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'ideas'
            }
        ],
    },
]