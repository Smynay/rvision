import { ITask } from 'models/task';

export interface ITaskService {
  fetchTasks(): Promise<ITask[]>;
}

class TaskService implements ITaskService {
  async fetchTasks() {
    const res = await fetch(`/tasks.json`);
    const result: ITask[] = await res.json();

    return result;
  }
}

export const TaskServiceInstance = new TaskService();
