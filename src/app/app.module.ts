import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialImportsModule } from 'src/material-imports.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TaskDialogComponent } from './shared/task-dialog/task-dialog.component';
import { CreateTaskDialogComponent } from './shared/create-task-dialog/create-task-dialog.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TaskPageComponent,
    TaskDialogComponent,
    CreateTaskDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialImportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
