import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddComponent } from './Components/add/add.component';

const routes: Routes = [
  {path: '', component:DashboardComponent, pathMatch: 'full'},  
  {path: 'add', component: AddComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutBoundCallsRoutingModule { }
