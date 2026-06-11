import { Component, OnInit } from '@angular/core';
import { ListAbstract } from '../../../../shared/abstract/list.abstract';
import { Params } from '../../../../shared/models/dto/params.model';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task';
import { TaskCard } from '../task-card/task-card';
import { Button } from '../../../../shared/components/button/button';
import { Card } from '../../../../shared/components/card/card';
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  selector: 'app-tasks',
  imports: [
    TaskCard,
    Button,
    A11yModule
],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks extends ListAbstract<Task> implements OnInit {
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

  override ngOnInit(): void {
    super.ngOnInit();
    this.taskExpiring();
  }

  taskExpiring(): void {
    const subscription = this.service.taskExpiring().subscribe({
      next: (response) => {
        console.log('Tarefas expirando:', response.content);
      },
      error: (error) => {
        console.error('Erro ao buscar tarefas expirando:', error);
      },
      complete: () => {
        subscription.unsubscribe();
      }
    });
  }
}
