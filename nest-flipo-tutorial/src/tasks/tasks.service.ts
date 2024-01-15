import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First task',
      description: 'This is the first task',
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task: Task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.IN_PROGRESS,
    };

    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, description: string) {
    //update task
    const task = this.tasks.find((task) => task.id === id);
    task.description = description;
    task.status = TaskStatus.DONE;
    return 'Task updated ... id: ' + id + ' description: ' + description + ' status: ' + task.status;   
  }

  deleteTask(id: string) { 
    //delete task
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return 'Task deleted ... id: ' + id;
  }
}
