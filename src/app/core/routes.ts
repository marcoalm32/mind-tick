import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ideas'
    },
    {
        path: 'ideas',
        loadComponent: () => import("./components/main-layout/main-layout").then(m => m.MainLayout),
        children: [
            {
                path: '',
                loadChildren: () => import("../ideas/routes").then(m => m.routes)
            },
        ],
    },
    {
        path: 'tasks',
        loadComponent: () => import("./components/main-layout/main-layout").then(m => m.MainLayout),
        children: [
            {
                path: '',
                loadChildren: () => import("../tasks/routes").then(m => m.routes)
            },
        ],
    }
]