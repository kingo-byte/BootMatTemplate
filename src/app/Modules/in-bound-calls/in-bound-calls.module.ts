import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './Components/main/main.component';
import { EditComponent } from './Components/edit/edit.component';
import { ViewComponent } from './Components/view/view.component';
import { InBoundCallsRoutingModule } from './in-bound-calls-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InBoundCallsRoutingModule,
    MainComponent,
    EditComponent,
    ViewComponent
  ]
})
export class InBoundCallsModule { }
