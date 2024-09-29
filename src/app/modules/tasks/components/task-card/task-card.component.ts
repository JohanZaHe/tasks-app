import { Component, Input } from '@angular/core';
import { ITask } from '../../../state-management/state-management.model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {
  getStateValue,
  writeInTheState,
} from '../../../state-management/state-management';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task!: ITask;

  changeTaskStatus(event: MatCheckboxChange): void {
    const newStatus = event.checked ? 'done' : 'to do';
    const currentStateValue = getStateValue();
    writeInTheState(
      currentStateValue.map((task) => {
        if (task.id === this.task.id) {
          return { ...task, status: newStatus };
        }
        return { ...task };
      })
    );
  }
}
