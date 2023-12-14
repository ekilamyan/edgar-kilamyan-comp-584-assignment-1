import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPageComponent } from './task-page/task-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/task-page', pathMatch: 'full' },
  { path: 'task-page', component: TaskPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
