import { Directive, OnDestroy, OnInit, signal } from "@angular/core";
import { Subscription } from "rxjs";
import { Params } from "../models/dto/params.model";
import { Response } from "../models/response.model";
import { Router } from "@angular/router";
import { Crud, BaseEntity } from "../models/crud.model";

@Directive({})
export abstract class ListAbstract<
    T extends BaseEntity
> implements OnInit, OnDestroy {

    protected data = signal<T[]>([]);
    protected subscriptions: Subscription[] = [];
    abstract params: Params;
    constructor(
        protected readonly router: Router,
        protected readonly service: Crud<T>
    ) {}

    ngOnInit(): void {
        this.findAll();
    }

    protected findAll(): void {
        const subscription = this.service.getAll(this.params).subscribe({
            next: (response: Response<T[]>) => {
                this.data.set(response.content);
            },
            error: (error: any) => {
                console.error('Error fetching data', error);
            }
        });
        this.subscriptions.push(subscription);
    }

    protected delete(item: T): void {
        if (item.id == null) {
            return;
        }
        const subscription = this.service.delete(item).subscribe({
            next: () => this.findAll(),
            error: (error: any) => {
                console.error('Error deleting item', error);
            }
        });
        this.subscriptions.push(subscription);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}