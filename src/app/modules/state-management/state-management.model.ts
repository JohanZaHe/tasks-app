export interface ITask {
  id: number;
  name: string;
  status?: 'done' | 'to do' | null;
  deadLine: string;
  people: IPeople[];
}

interface IPeople {
  name: string;
  age: number;
  skills: ISkill[];
}

interface ISkill {
  name: string;
}
