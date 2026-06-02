import { Component, signal } from '@angular/core';
import { Card } from '../../../shared/components/card/card';
import { Form } from '../../../shared/components/form/form';
import { Field } from '../../../shared/components/field/field';
import { FormAbstract } from '../../../shared/abstract/form.abstract';
import { Idea } from '../../models/idea.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService } from '../../services/ideas';
import { form, maxLength, required } from '@angular/forms/signals';
import { TextArea } from '../../../shared/components/text-area/text-area';
import { Button } from '../../../shared/components/button/button';
import { requiredValidator } from '../../../shared/validators/required.validator';

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

  model = signal<{title: string, description: string}>({
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

  createForm() {
    console.log('Creating form');
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
