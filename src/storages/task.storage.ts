import { makeAutoObservable } from 'mobx';

import { ITask } from 'models/task';
import { ITaskService, TaskServiceInstance } from 'services/task.service';

export interface ITaskStore {
  transportLayer: ITaskService;
  tasks: ITask[];
  isLoading: boolean;
}

class TaskStore implements ITaskStore {
  transportLayer;
  tasks: ITask[] = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
    this.transportLayer = TaskServiceInstance;
    this.loadTodos();
  }

  async loadTodos() {
    this.isLoading = true;
    this.tasks = await this.transportLayer.fetchTasks();
  }
}

export const taskStore = new TaskStore();
