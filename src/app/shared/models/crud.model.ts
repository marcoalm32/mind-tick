import { Params } from "./dto/params.model";
import { Observable } from "rxjs";
import { Response } from "./response.model";


export interface BaseEntity {
    id?: number;
}

export interface Crud<T extends BaseEntity> {
    getAll(params: Params): Observable<Response<T[]>>;
    getById(id: number): Observable<Response<T>>;
    create(entity: T): Observable<Response<T>>;
    update(id: number, entity: T): Observable<Response<T>>;
    delete(entity: T): Observable<Response<void>>;
    getByName(name: string): Observable<Response<T[]>>;
}