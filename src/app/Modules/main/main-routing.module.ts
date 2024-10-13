import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TestFormComponent } from './Components/test-form/test-form.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'test-form', component: TestFormComponent },
      {
        path: 'in-bound-calls',
        loadChildren: () =>
          import('./Modules/in-bound-calls/in-bound-calls.module').then((m) => m.InBoundCallsModule),
       },
       {
        path: 'out-bound-calls',
        loadChildren: () =>
          import('./Modules/out-bound-calls/out-bound-calls.module').then((m) => m.OutBoundCallsModule),
       },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
