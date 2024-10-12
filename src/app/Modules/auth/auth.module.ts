import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticateComponent } from './Components/authenticate/authenticate.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthenticateComponent
  ]
})
export class AuthModule { }
