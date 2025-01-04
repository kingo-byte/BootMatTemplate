import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { MainComponent } from './Components/main/main.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainComponent,
    WelcomeComponent
  ]
})
export class HomeModule { }
