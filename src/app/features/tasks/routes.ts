import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./components/task/tasks").then(m => m.Tasks)
    },
    {
        path: "new",
        loadComponent: () => import("./components/task-form/task-form").then(m => m.TaskForm)
    },
    {
        path: ":id",
        loadComponent: () => import("./components/task-form/task-form").then(m => m.TaskForm)
    }
]