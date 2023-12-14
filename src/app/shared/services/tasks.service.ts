import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks = new BehaviorSubject<any[]>([]);
  // public tasks: BehaviorSubject<Task[]> = new BehaviorSubject([]);

  constructor() {
    if (localStorage.getItem("tasks")) {
      const sessionTasks = localStorage.getItem("tasks");
      const tasks = JSON.parse(sessionTasks);
      this.tasks.next(tasks)
    } else {
      this.tasks.next(null);
    }
  }
  
}


