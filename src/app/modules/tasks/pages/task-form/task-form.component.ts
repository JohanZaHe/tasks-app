import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  NumericValueType,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import {
  getStateValue,
  writeInTheState,
} from '../../../state-management/state-management';
import { ITask } from '../../../state-management/state-management.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  formTask = this.fb.group({
    name: ['', Validators.required],
    deadLine: ['', Validators.required],
    people: this.fb.array([]),
  });

  constructor(private fb: FormBuilder,  public dialogRef: MatDialogRef<TaskFormComponent>,) {}

  addFormControl(fg: FormGroup, parentFormControlName: string, fields: any) {
    const people = this.getFormControlByName(fg, parentFormControlName);
    const peopleForm = this.fb.group(fields);
    people.push(peopleForm);
  }

  deleteFormControl(
    fg: FormGroup,
    parentFormControlName: string,
    formControlIndex: number
  ) {
    const people = this.getFormControlByName(fg, parentFormControlName);
    people.removeAt(formControlIndex);
  }

  getFormControlByName(fg: FormGroup, formControlName: string) {
    return <FormArray<FormGroup>>fg.get(formControlName);
  }

  skillFormControlTemplate = () => ({
    name: new FormControl('', [Validators.required]),
  });

  personFormControlTemplate = () => ({
    name: new FormControl('', [Validators.required, RxwebValidators.unique()]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(18),
      RxwebValidators.numeric({
        acceptValue: NumericValueType.PositiveNumber,
        allowDecimal: false,
      }),
    ]),
    skills: new FormArray([this.fb.group(this.skillFormControlTemplate())]),
  });

  saveTask(): void {
    const currenStateValue = getStateValue();
    const newTask = {
      ...this.formTask.value,
      id: Date.now() + Math.random(),
      status: 'to do',
    } as ITask;
    writeInTheState([...currenStateValue, newTask]);
    this.dialogRef.close();
  }

}
