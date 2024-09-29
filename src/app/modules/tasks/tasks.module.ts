import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MatNativeDateModule } from '@angular/material/core';

// Components
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';
import { StatusFilterPipe } from '../../pipes/status-filter.pipe';

@NgModule({
  declarations: [TaskListComponent, TaskCardComponent, TaskFormComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RxReactiveFormsModule,
    MatDividerModule,
    MatBadgeModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StatusFilterPipe
  ],
  providers: [MatDatepickerModule],
})
export class TasksModule {}
