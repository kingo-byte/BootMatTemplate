import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TestFormComponent } from './Components/test-form/test-form.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    WelcomeComponent,
    TestFormComponent,
    HomeComponent,
    NavbarComponent,
  ]
})
export class MainModule { }
