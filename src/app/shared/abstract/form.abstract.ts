import { Directive, Inject, InjectionToken, OnDestroy, OnInit, WritableSignal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Crud, BaseEntity } from "../models/crud.model";

@Directive()
export abstract class FormAbstract<
    T extends BaseEntity,
    S = Crud<T>
> implements OnInit, OnDestroy {
    
    protected subscriptions: Subscription[] = [];
    protected data: T | T[] | null = null;
    protected editMode = false;
    protected abstract model: WritableSignal<T>;

    constructor(
        protected readonly router: Router,
        protected readonly route: ActivatedRoute,
        protected readonly service: S
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    protected abstract createForm(): void;

    protected abstract isValid(): boolean;

    save(): void {
        if (!this.isValid()) {
            return;
        }
        if (this.editMode) {
            this.update();
        } else {
            this.create();
        }
    }

    protected create(): void {
        if (this.model()) {
            // Implement create logic here
        }
    }

    protected update(): void {

    }

}