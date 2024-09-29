import { Component, OnInit } from '@angular/core';
import { getStateInstance } from '../../../state-management/state-management';
import { ITask } from '../../../state-management/state-management.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MatChipListboxChange } from '@angular/material/chips';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  taskStatusFilters = [
    { name: 'All', id: null, color: 'primary' },
    { name: 'To Do', id: 'to do', color: 'warn' },
    { name: 'Done', id: 'done', color: 'accent' },
  ];

  filterSelected: 'to do' | 'done' | null = null;

  $tasks!: Observable<ITask[]>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.$tasks = getStateInstance();
  }

  openTaskForm(): void {
    this.dialog.open(TaskFormComponent, { width: '600px' });
  }

  taskTrackBy(index: number, task: ITask) {
    return task.id;
  }

  filterChange(event: MatChipListboxChange): void {
    this.filterSelected = event.value;
  }
}
