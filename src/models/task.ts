export enum TaskStatus {
  PLAN = 'PLAN',
  IN_PROGRESS = 'IN_PROGRESS',
  TESTING = 'TESTING',
  DONE = 'DONE',
}

export enum TaskPriority {
  MUST = 'MUST',
  SHOULD = 'SHOULD',
  COULD = 'COULD',
}

export interface ITask {
  id: string;
  title: string;
  name: string;
  surname: string;
  status: TaskStatus;
  priority: TaskPriority;
  date: string;
}
