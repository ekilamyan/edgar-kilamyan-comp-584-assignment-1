import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.css']
})
export class CreateTaskDialogComponent implements OnInit {
  newTaskForm = new FormGroup({});
  task = new Task(null);
  constructor(private formBuilder: FormBuilder, private taskService: TasksService, public dialogRef: MatDialogRef<CreateTaskDialogComponent>) { }

  ngOnInit(): void {
    this.newTaskForm  = this.formBuilder.group({
      taskName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
      description: ['', Validators.compose([Validators.required])],
    });
  }

  submitForm() {  
    const task = new Task(null)

    task.taskName = this.newTaskForm.get('taskName')?.value;
    task.description = this.newTaskForm.get('description')?.value;

    console.log(task);

    if (this.taskService.tasks.value == null) {
      this.taskService.tasks.value.push(task);
    }
    else {
      this.taskService.tasks.value.push(task);
    }

    localStorage.setItem("tasks", JSON.stringify(this.taskService.tasks.value));
    // console.log(localStorage.getItem("tasks"))

    this.dialogRef.close();
  }
}