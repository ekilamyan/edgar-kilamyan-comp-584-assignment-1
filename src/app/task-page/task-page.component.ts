import { Component, OnInit } from '@angular/core';
import { TaskDialogComponent } from '../shared/task-dialog/task-dialog.component';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../shared/models/task';
import { CreateTaskDialogComponent } from '../shared/create-task-dialog/create-task-dialog.component';
import { TasksService } from '../shared/services/tasks.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],

})
export class TaskPageComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private dialog: MatDialog, private taskService: TasksService) { }

  ngOnInit(): void {
    console.log(this.taskService.tasks);
    this.taskService.tasks.subscribe((res: any[]) => {
      // this.tasks = localStorage.getItem("tasks");
    })

    var retrievedObject = localStorage.getItem("tasks");
    this.tasks = JSON.parse(retrievedObject);
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      height: 'auto',
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refreshTasks();
    });
  }

  openDialog(task: Task, index: number): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      height: 'auto',
      width: '40%',
      data: {
        task: task,
        index: index
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refreshTasks();
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    console.log(this.tasks);
    this.taskService.tasks.next(this.tasks);
    localStorage.setItem("tasks", JSON.stringify(this.taskService.tasks.value));
  }

  refreshTasks() {
    var retrievedObject = localStorage.getItem("tasks");
    this.tasks = JSON.parse(retrievedObject);
  }

}
