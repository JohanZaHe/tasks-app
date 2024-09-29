import { BehaviorSubject } from 'rxjs';
import { ITask } from './state-management.model';

const initialTaskesState: ITask[] = [
  {
    id: 0,
    status: 'to do',
    name: 'Test of August 8, 2024',
    deadLine: '2024-05-20',
    people: [
      {
        name: 'Person',
        age: 20,
        skills: [
          {
            name: 'skill',
          },
        ],
      },
    ],
  },
];

const state = new BehaviorSubject(initialTaskesState);

export const getStateValue = () => state.value;

export const writeInTheState = (newValue: ITask[]) => state.next(newValue);

export const getStateInstance = () => state;
