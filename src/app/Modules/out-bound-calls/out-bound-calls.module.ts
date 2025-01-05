import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './Components/edit/edit.component';
import { ViewComponent } from './Components/view/view.component';
import { MainComponent } from './Components/main/main.component';
import { OutBoundCallsRoutingModule } from './out-bound-calls-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OutBoundCallsRoutingModule,
    MainComponent,
    EditComponent,
    ViewComponent
  ]
})
export class OutBoundCallsModule { }
