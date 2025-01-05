import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './Components/edit/edit.component';
import { ViewComponent } from './Components/view/view.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children: [
        { path: 'edit', component: EditComponent },
        { path: 'view', component: ViewComponent }
      ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InBoundCallsRoutingModule { }
