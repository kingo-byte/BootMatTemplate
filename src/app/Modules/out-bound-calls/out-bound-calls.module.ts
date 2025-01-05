import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EditComponent } from './Components/edit/edit.component';
import { ViewComponent } from './Components/view/view.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MainComponent,
    EditComponent,
    ViewComponent
  ]
})
export class OutBoundCallsModule { }
