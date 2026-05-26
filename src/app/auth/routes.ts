import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./components/auth/auth").then(m => m.Auth)
    }
]