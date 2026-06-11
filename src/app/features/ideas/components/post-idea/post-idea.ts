import { Component, signal } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { Form } from '../../../../shared/components/form/form';
import { Field } from '../../../../shared/components/field/field';
import { FormAbstract } from '../../../../shared/abstract/form.abstract';
import { Idea } from '../../models/idea.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService } from '../../services/ideas';
import { form, maxLength, required } from '@angular/forms/signals';
import { TextArea } from '../../../../shared/components/text-area/text-area';
import { Button } from '../../../../shared/components/button/button';
import { requiredValidator } from '../../../../shared/validators/required.validator';
import { Response } from '../../../../shared/models/response.model';

@Component({
  selector: 'app-post-idea',
  imports: [
    Card,
    Form,
    Field,
    TextArea,
    Button,
  ],
  templateUrl: './post-idea.html',
  styleUrl: './post-idea.scss',
})
export class PostIdea extends FormAbstract<Idea> {

  titleStarted = signal<boolean>(false);
  descriptionStarted = signal<boolean>(false);

  protected override model = signal<Idea>({
    title: '',
    description: '',
  });

  ideaForm = form(this.model, (path) => {
    required(path.title, {
      message: 'Title is required'
    })
    maxLength(path.title, 100, {
      message: 'Title must be less than 100 characters'
    })
  });

  titleError = requiredValidator(this.ideaForm.title, this.titleStarted);
  descriptionError = requiredValidator(this.ideaForm.description, this.descriptionStarted);

  constructor(
    protected override readonly router: Router,
    protected override readonly route: ActivatedRoute,
    protected override readonly service: IdeaService,
  ) {
    super(router, route, service);
  }

  protected override createForm(): void {
    // no-op: form is initialized declaratively above
  }

  protected override isValid(): boolean {
    return this.ideaForm().valid();
  }

  /** Sends the new idea to the backend. Called by the submit button. */
  protected override create(): void {
    const subscription = this.service.create(this.model()).subscribe({
      next: (response: Response<Idea>) => {
        console.log('Idea created successfully', response);
        this.model.set({
          title: '',
          description: '',
        });
        this.titleStarted.set(false);
        this.descriptionStarted.set(false);
      }, error: (error) => {
        console.error('Error creating idea', error);
      }
    });
    this.subscriptions.push(subscription);
  }

  onTitleChange(value: string): void {
    this.titleStarted.set(true);
    this.model.update((current) => ({
      ...current,
      title: value,
    }));
  }

  onDescriptionChange(value: string): void {
    this.descriptionStarted.set(true);
    this.model.update((current) => ({
      ...current,
      description: value,
    }));
  }

}
