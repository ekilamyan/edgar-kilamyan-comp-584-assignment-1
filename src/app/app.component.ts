import { Component } from '@angular/core';
import { TasksService } from './shared/services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comp-584-assignment-1';

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    if (this.taskService.tasks.value == null) {
      this.taskService.tasks.next([]);
    }
  }
}
