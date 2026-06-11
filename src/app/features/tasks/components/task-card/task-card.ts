import { Component, input } from '@angular/core';
import { Task } from '../../models/task.model';
import { Card } from '../../../../shared/components/card/card';
import { DatePipe } from '@angular/common';
import { Badges } from '../../../../shared/components/badges/badges';
import { PriorityTask } from '../../models/types/priority-task';
import { ColorType } from '../../../../shared/types/color';
import { StatusTask } from '../../models/types/status-task';

@Component({
  selector: 'app-task-card',
  imports: [
    Card,
    DatePipe,
    Badges,
  ],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {

  task = input<Task>({
    name: '',
    detail: '',
    deadline: '',
    priority: 'LOW',
    status: 'PENDING',
  });
  index = input<number>(0);

  setBadgeColor(priority: PriorityTask | StatusTask): ColorType {
    const color = {
      HIGH: 'warning',
      MEDIUM: 'info',
      LOW: 'success',
      CRITICAL: 'danger',
      PENDING: 'danger',
      DOING: 'warning',
      DONE: 'success',
      CANCELED: 'dark',
    } as Record<PriorityTask | StatusTask, ColorType>;
    return color[priority] || 'primary';
  }
  
}
