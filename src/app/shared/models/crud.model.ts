import { Params } from "@angular/router";
import { Observable } from "rxjs";
import { Response } from "./response.model";


export interface EntityBase {
    id: number;
}

export interface Crud<T extends EntityBase> {
    getAll(params: Params): Observable<Response<T[]>>;
    getById(id: number): Observable<Response<T>>;
    create(entity: T): Observable<Response<T>>;
    update(id: number, entity: T): Observable<Response<T>>;
    delete(id: number): Observable<Response<void>>;
    getByName(name: string): Observable<Response<T[]>>;
}