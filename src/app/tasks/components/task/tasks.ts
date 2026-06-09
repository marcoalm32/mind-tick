import { Component } from '@angular/core';
import { ListAbstract } from '../../../shared/abstract/list.abstract';
import { Params } from '../../../shared/models/dto/params.model';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task';
import { TaskCard } from '../task-card/task-card';
import { Button } from '../../../shared/components/button/button';
import { Card } from '../../../shared/components/card/card';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskCard,
    Button,
],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks extends ListAbstract<Task> {
  override params: Params = new Params();

  constructor(
    protected override readonly router: Router,
    protected override readonly service: TaskService,
  ) {
    super(router, service);
  }

  navigateNewTask(): void {
    this.router.navigate(['tasks', 'new']);
  }
}
