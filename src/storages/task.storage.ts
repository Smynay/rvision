import { makeAutoObservable } from 'mobx';

import { ITask, TaskStatus } from 'models/task';
import {
  ILocalStorageService,
  LocalStorageServiceInstance,
} from 'services/local-storage.service';
import { ITaskService, TaskServiceInstance } from 'services/task.service';
import { LOCAL_STORAGE_TASKS_TAG } from 'utils/constants';

export interface ITaskStore {
  transportLayer: ITaskService;
  repositoriesLayer: ILocalStorageService;
  tasks: ITask[];
  isLoading: boolean;
  updateTaskStatusById: (id: string, status: TaskStatus) => void;
}

class TaskStore implements ITaskStore {
  transportLayer: ITaskService;
  repositoriesLayer: ILocalStorageService;

  tasks: ITask[] = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
    this.transportLayer = TaskServiceInstance;
    this.repositoriesLayer = LocalStorageServiceInstance;

    const tasksFromStorage = this.repositoriesLayer.loadData<ITask[]>(
      LOCAL_STORAGE_TASKS_TAG
    );

    if (tasksFromStorage === false) {
      this.loadTasks();
    } else {
      this.tasks = tasksFromStorage;
    }
  }

  async loadTasks() {
    this.isLoading = true;
    this.tasks = await this.transportLayer.fetchTasks();
    this.repositoriesLayer.saveData(LOCAL_STORAGE_TASKS_TAG, this.tasks);
    this.isLoading = false;
  }

  updateTaskStatusById(id: string, status: TaskStatus) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status,
        };
      }

      return task;
    });
    this.repositoriesLayer.saveData(LOCAL_STORAGE_TASKS_TAG, this.tasks);
  }
}

export const taskStore = new TaskStore();
