import { Directive, Inject, InjectionToken, OnDestroy, OnInit, signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";

const SERVICE_MODEL = new InjectionToken('SERVICE_MODEL');
@Directive()
export abstract class FormAbstract<T> implements OnInit, OnDestroy {
    
    protected subscriptions: Subscription[] = [];
    protected data: T | T[] | null = null;
    protected editMode = false;

    constructor(
        protected readonly router: Router,
        protected readonly route: ActivatedRoute,
        @Inject(SERVICE_MODEL) protected readonly service: any
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    protected abstract createForm(): void;
    
    protected save(): void {
        if (this.editMode) {
            this.update();
        } else {
            this.create();
        }
    }

    protected create() {

    }

    protected update() {

    }

}