import { Component, signal } from '@angular/core';
import { FormAbstract } from '../../../../shared/abstract/form.abstract';
import { Task } from '../../models/task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task';
import { Field } from '../../../../shared/components/field/field';
import { Form } from '../../../../shared/components/form/form';
import { Card } from '../../../../shared/components/card/card';
import { form, maxLength, required } from '@angular/forms/signals';
import { requiredValidator } from '../../../../shared/validators/required.validator';
import { DateField } from '../../../../shared/components/date-field/date-field';
import { fieldChange } from '../../models/types/field-change';
import { Dropdown } from '../../../../shared/components/dropdown/dropdown';
import { StatusOptions } from '../../models/options/status.options';
import { PriorityOptions } from '../../models/options/priorityOptions';
import { OptionsDropdown } from '../../../../shared/models/options-dropdown.model';
import { DropdownOptionsFactory } from '../../../../shared/factories/dropdown-options.factory';
import { TextArea } from '../../../../shared/components/text-area/text-area';
import { Button } from '../../../../shared/components/button/button';
import moment from 'moment';

@Component({
  selector: 'app-task-form',
  imports: [
    Card,
    Form,
    Field,
    TextArea,
    DateField,
    Dropdown,
    Button
],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm extends FormAbstract<Task>{
  nameStarted = signal<boolean>(false);
  detailStarted = signal<boolean>(false);
  deadlineStarted = signal<boolean>(false);
  statusStarted = signal<boolean>(false);
  priorityStarted = signal<boolean>(false);
  protected override model = signal<Task>({
    name: '',
    detail: '',
    deadline: '',
    priority: 'LOW',
    status: 'PENDING',
  });
  
  taskForm = form(this.model, (path) => {
    required(path.name, { message: 'Name is required' });
    maxLength(path.name, 100, { message: 'Name must be less than 100 characters' });

    required(path.detail, { message: 'Detail is required' });
    maxLength(path.detail, 250, { message: 'Detail must be less than 250 characters' });

    required(path.status, { message: 'Status is required' });
    required(path.priority, { message: 'Priority is required' });
  });

  nameError = requiredValidator(this.taskForm.name, this.nameStarted);
  detailError = requiredValidator(this.taskForm.detail, this.detailStarted);
  statusError = requiredValidator(this.taskForm.status, this.statusStarted);
  priorityError = requiredValidator(this.taskForm.priority, this.priorityStarted);
  constructor(
    protected override readonly router: Router,
    protected override readonly route: ActivatedRoute,
    protected override readonly service: TaskService
  ) {
    super(router, route, service);
  }

  statusOptions: OptionsDropdown[] = DropdownOptionsFactory(StatusOptions);
  priorityOptions: OptionsDropdown[] = DropdownOptionsFactory(PriorityOptions);

  protected override createForm(): void {
    console.log('create form');
  }
  
  protected override isValid(): boolean {
    return true;
  }

  onFieldChange(field: fieldChange, value: string | string[]): void {
    const startedSignals = {
      name: this.nameStarted,
      detail: this.detailStarted,
      status: this.statusStarted,
      priority: this.priorityStarted,
    } as const;

    startedSignals[field].set(true);
    this.model.update((current) => ({
      ...current,
      [field]: value
    }));
  }

  onDateChange(value: string): void {
    this.deadlineStarted.set(true);
    const formattedDate = moment(value).format('YYYY-MM-DD');
    this.model.update((current) => ({
      ...current,
      deadline: formattedDate
    }));
  }
  
}
