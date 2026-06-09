import { Directive, Inject, InjectionToken, OnDestroy, OnInit, WritableSignal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Crud, BaseEntity } from "../models/crud.model";

@Directive()
export abstract class FormAbstract<
    T extends BaseEntity,
    E extends BaseEntity = T,
    S extends Crud<E> = Crud<E>
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
        this.identifyForm();
    }

    protected identifyForm(): void {
        const id = this.route.snapshot.paramMap.get("id");
        this.editMode = !!id;
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

    protected cancel(): void {
        this.router.navigate(['..'], { relativeTo: this.route });
    }

    protected create(): void {
        const subscription = this.service.create(this.toEntity(this.model())).subscribe({
            next: () => {
                this.router.navigate(['..'], { relativeTo: this.route });
            },
            error: (err: any) => {
                console.error('Error creating entity:', err)
            }
        });
        this.subscriptions.push(subscription);
    }

    protected update(): void {

    }

    protected toEntity(model: T): E {
        return model as unknown as E;
    }

}