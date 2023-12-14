import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {
  public task: Task;
  public comments: string[]; 

  updateTaskForm = new FormGroup({});
  commentForm = new FormGroup({});

  public durationInSeconds = 5;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TasksService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.comments = this.data.task.comments
    this.updateTaskForm = this.formBuilder.group({
      taskName: [this.data.task.taskName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
      description: [this.data.task.description, Validators.compose([Validators.required])],
    });

    this.commentForm = this.formBuilder.group({
      comment: ['']
    });

  }

  update() {
    this.taskService.tasks.value[this.data.index].taskName = this.updateTaskForm.get('taskName')?.value;
    this.taskService.tasks.value[this.data.index].description = this.updateTaskForm.get('description')?.value;

    localStorage.setItem("tasks", JSON.stringify(this.taskService.tasks.value));

    this.snackBar.open('Task updated added', 'Dismiss', {
      duration: (this.durationInSeconds + 3) * 1000,
    });
  }

  addComment() {
    console.log(this.commentForm.get('comment')?.value);
    this.taskService.tasks.value[this.data.index].comments.push(this.commentForm.get('comment')?.value);
    this.comments.push(this.commentForm.get('comment')?.value);
    localStorage.setItem("tasks", JSON.stringify(this.taskService.tasks.value));
  }
}