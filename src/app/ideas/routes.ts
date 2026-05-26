import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ideas'
    },
    {
        path: 'ideas',
        loadComponent: () => import('./components/my-ideas/my-ideas').then(m => m.MyIdeas)
    }
]