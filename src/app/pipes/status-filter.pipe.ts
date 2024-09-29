import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../modules/state-management/state-management.model';

@Pipe({
  name: 'statusFilter',
  standalone: true,
})
export class StatusFilterPipe implements PipeTransform {
  transform(
    tasks: ITask[] | null,
    filterSelected: 'to do' | 'done' | null
  ): ITask[] {
    if (!tasks) {
      return [];
    }
    if (filterSelected !== null) {
      return tasks.filter((task) => task.status === filterSelected);
    }
    return tasks;
  }
}
