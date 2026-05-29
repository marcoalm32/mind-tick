import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Crud, EntityBase } from "../models/crud.model";
import { Observable } from "rxjs";
import { Params } from "../models/dto/params.model";
import { Response } from "../models/response.model";

@Injectable({
  providedIn: 'root'
})
export abstract class ServiceAbstract<T extends EntityBase> implements Crud<T> {
    constructor(
        protected readonly endpoint: string,
        protected readonly http: HttpClient
    ) {}

    getAll(params: Params): Observable<Response<T[]>> {
        let httpParams = new HttpParams();
        if (params.page) {
            httpParams = httpParams.set('page', params.page);
        }
        if (params.pageSize) {
            httpParams = httpParams.set('pageSize', String(params.pageSize));
        }
        if (params.search) {
            httpParams = httpParams.set('search', params.search);
        }
        return this.http.get<Response<T[]>>(this.endpoint, { params: httpParams });
    }

    getById(id: number): Observable<Response<T>> {
        return this.http.get<Response<T>>(`${this.endpoint}/${id}`);
    }

    create(entity: T): Observable<Response<T>> {
        return this.http.post<Response<T>>(this.endpoint, entity);
    }

    update(id: number, entity: T): Observable<Response<T>> {
        return this.http.put<Response<T>>(`${this.endpoint}/${id}`, entity);
    }

    delete(id: number): Observable<Response<void>> {
        return this.http.delete<Response<void>>(`${this.endpoint}/${id}`);
    }

    getByName(name: string): Observable<Response<T[]>> {
        return this.http.get<Response<T[]>>(`${this.endpoint}/name/${name}`);
    }

    
}